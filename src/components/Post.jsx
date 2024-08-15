const names = ['Manuel','Marie'];


function Post(){
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

 return (
    <div>
        <p>Hi {chosenName}</p>
        <p>React Js is awesome!</p>
    </div>
 );
}

export default Post;