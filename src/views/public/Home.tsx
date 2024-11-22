import { useState } from "react";
import Editor from "../../components/Editor";



// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

export const Home = () => {
  const [data, setData] = useState(INITIAL_DATA);



  return (
    <>
     <div className="border border-green-300 m-10 font-sans rounded-md text-slate-800">
      <div className='editor-wrapper mt-5'>
         <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      </div>
      <button
        className="savebtn"
        onClick={() => {
          alert(JSON.stringify(data));
        }}
      >
        Save
      </button>
    </div>

   
    </>
   
  );
}
