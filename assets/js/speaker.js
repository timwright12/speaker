;(function ( $, w, doc ) {

    // Enable strict mode
    "use strict";
    
    // Local object for method references
    var Speaker = {};
    
    // Namespace
    Speaker.ns = "Speaker";
    
    // Start defining methods here
    Speaker.init = function () {

        var formContent = doc.getElementById("speech-content");
        var formUrl = doc.getElementById("speech-url");
        var stopContent = doc.getElementById("stop-content");
        var stopUrl = doc.getElementById("stop-url");
        var content;
        var url;
        var action;
        
        // Normal, read the content form
        formContent.addEventListener("submit", function( e ) {
            
            e.preventDefault();
            
            content = doc.getElementById("content");
            
            Speaker.getMessage( content.value );
            
        });
        
        // the URL form, much more difficult
        formUrl.addEventListener("submit", function( e ) {
            
            e.preventDefault();
            
            url = doc.getElementById("url").value;
            action = this.getAttribute('action');
           
            $.ajax({
                type: 'GET',
                url: action,
                data: {
                    url: url 
                },
                content: $('body'),
                success: function( data ) {

                    Speaker.getMessage( data );
                
                }
            });
            
        });

    }; // init()
    
    Speaker.getMessage = function ( content ) {
        
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        
        msg.voice = null;
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1.3; // 0.1 to 10
        msg.pitch = 1.2 //0 to 2
        
        if( content ) {
            msg.text = content;
        } else {
            msg.text = 'Please enter content';
        }
        
        msg.lang = 'en-US';
        
        speechSynthesis.speak( msg );

    }; // getMessage()
    
    // Start the application
    Speaker.init();

} )( Zepto, this, this.document );