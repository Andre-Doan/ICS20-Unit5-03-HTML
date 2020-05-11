// JavaScript File
document.getElementById("guess").onclick = function(){
let age = document.getElementById("agesubmit").value;
if (age >= 17)
{
    alert("You can watch Rated R Movies but beware YOU MAY BE SCARRED FOR LIFE!!!!");
}
else if (age >= 13)
{
    alert("You can watch PG 13 movies, and Disney Channel, but thats for kids ");
}
else
{
    alert("You are too young too watch any movies, stick to Disney Channel or any G rated movies");
}
};
