<?php
    include 'inc/html-head.php';
    include 'inc/header.php';
?>

<div class="contain">
    <div class="P-10">
        
        <h1>An Article Reader App</h1>
        
        <form action="" method="post" id="speech-content">
            <label for="content">Paste the content you want read:</label>
            <textarea id="content" cols="100" rows="5"></textarea>
            <button type="submit" id="go" class="btn">Read it.</button> 
        </form>
        
        <p class="text-center">or</p>
        
        <form action="get.php" method="post" id="speech-url">
            <label for="url">Enter a URL to parse for content</label>
            <input type="url" id="url" placeholder="http://" value="http://csskarma.com/blog/performance-budget/"> 
            <button type="submit" id="submit" class="btn">Get it.</button> 
        </form>
    </div><!--/.gutter-->
</div><!--/.contain-->

<?php
    include 'inc/footer.php';
?>