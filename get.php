<?php
    include 'inc/simple_html_dom.php';

    if( isset( $_GET['url'] ) ) {
        
        $url = htmlentities($_GET['url']);
        $html = file_get_html( $url );
        
        $roleMain = $html->find('[role="main"]')[0];
        $classMain = $html->find('[class="main"]')[0];
        $classMainContent = $html->find('[class="main-content"]')[0];
        $classEspn = $html->find('[class="article"]')[0];

        echo html_entity_decode( $html->find('[role="main"]')[0]->plaintext );
        
    }

?>