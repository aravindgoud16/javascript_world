function picture(){ 
    var sourceOfPicture = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
    var img = document.getElementById('bigpic')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";

    }