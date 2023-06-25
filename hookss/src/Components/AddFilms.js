import{useState} from 'react'

const AddFilms = (amineadd) => {
    const  [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [ imgUrl, setImgUrl] = useState("");
    const [rate, setRate] = useState("");
    const amineaddfilm=()=>{
    amineadd({
        title:title,
        date:date,
        description:description,
        imgUrl: imgUrl,
        rate:rate,
    });
};
  return (
    <div className="styless">
        <h2>Title</h2>
        <input placeholder="Title" 
        onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <h2>Description</h2>
      <input
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <h2>Image Url</h2>
      <input
        placeholder="Url"
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <h2>Rate</h2>
      <input
        placeholder="Rate"
        onChange={(e) => {
          setRate(e.target.value);
        }}
      />
      <h2>Date</h2>
      <input
        placeholder="Date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      /><br/>
      <button onClick={ () =>(amineaddfilm)}> Add </button>
    </div>
      
 );
};

export default AddFilms;
