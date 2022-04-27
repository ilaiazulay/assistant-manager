window.onload = function()
{
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    var menu = document.getElementById("left-side");
    var hamburger = document.getElementById("hamburger");
    var menu_buttons = document.getElementsByClassName('menu_button')
  if(mediaQuery.matches)
  {
    console.log(1)
    hamburger.onclick = function(){
        if (menu.style.display == ("none")) 
            menu.style.display = "block";
        else
            menu.style.display = "none";
    }

    for(let i=0; i < menu_buttons.length; i++)
    menu_buttons[i].onclick = function(){
        menu.style.display = "none"
    }

};
}
var elem = document.getElementById("delete_player")
function alertclick () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'        ,
        )
        window.location.href = "squad.html";
        document.getElementById("delete_player").style.display = "none";
      }
      
    })
    };