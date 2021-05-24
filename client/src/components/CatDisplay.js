function CatDisplay(props) {
  props.cats.cats.cats.map((ele)=>console.log(ele));
  //console.log(props.cats.cats.cats);
  return (
    <div id="cat-display">
      
      {/* Display all the cats in this component, along with their properties -name, chonkyness, imagelink, biography
        For every cat render a delete button with an onClick handler, like that onClick={(e) => { e.preventDefault(); props.handleDelete(cat._id) }}
      */
      //props.cats.map((ele)=> <p>{ele}</p>)
      }

    </div>
  )
}

export default CatDisplay;