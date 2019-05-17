<script>
  function getRandomPost() {
    let quote = [
      'All that we are is the result of what we have thought.',
      'If you judge people, you have no time to love them.',
      'Stay hungry, stay foolish.',
      'A great man is always willing to be little.',
      'The future belongs to those who prepare for it today.',
      'It always seems impossible until it’s done.',
      'Turn your wounds into wisdom.',
      'I don’t think of all the misery but of the beauty that still remains.',
      'Whatever you are, be a good one.',
      'Do what you can, with what you have, where you are.',
    ];
    return quote[Math.floor(Math.random() * 10)];
  }
  let randomPost = getRandomPost();
</script>

<style>
.postit {
    line-height: 1;
    text-align:center;     
    width: 275px;    
    margin: 25px;    
    min-height: 50px;
    max-height: 200px;
    padding:35px;
    position:relative;   
    border:1px solid #E8E8E8;  
    border-top:60px solid #fdfd86;
    font-family: 'Indie Flower', cursive;
    font-family: 'Give You Glory', cursive;
    font-family: 'The Girl Next Door', cursive;
    font-family: 'Gloria Hallelujah', cursive;
    font-size:22px;      
    border-bottom-right-radius: 60px 5px;
    display:inline-block;    
    background: #ffff88; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
    background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
</style>

<div class="postit">
  <span>{randomPost}</span>
</div>