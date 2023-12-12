
let height=window.prompt("Enter the height of the tree");
tree(height);

function tree(height)
{
   let layer="*";
   let part=height;
   for(let i=0; i<height; i++)
   {
      let p1=" ";
      p1=p1.repeat(part);
      part--;

      console.log(p1+layer); 
      layer=layer+"**";
   }
   console.log("Merry Christmas!");
}