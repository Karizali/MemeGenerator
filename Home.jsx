import React, { useState } from 'react'

const Home = () => {

    const [memes,setMemes]=useState()
    const [editingImage,setEditingImage]=useState({})


    const getMemes=()=>{
        fetch("https://api.imgflip.com/get_memes").then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            setMemes(data.data.memes)
        })
    }
    const generateMeme=()=>{
        fetch(`https://api.imgflip.com/caption_image?template_id=${editingImage.id}&username=KarizAli&password=Karizali123@&text0=helloWorld&text1=HelloWorld`,{method:"POST"}).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            // setMemes(data.data.memes)
        })
    }

  return (
    <div>
        <h2>Text 1</h2>
        <input type="text" /> <br />
        <h2>Text 2</h2>
        <input type="text" />
        <div>
        <button onClick={getMemes}>Get Memes</button>
        <button onClick={generateMeme}>Generate</button>
        </div>

        <div className='memesContainer'>
            {
                memes?.map((meme,i)=>{
                    return <div className='meme' key={meme.id}>
                        {/* <h3>{meme.name}</h3> */}
                        <img onClick={()=>{setEditingImage(meme)}} src={meme?.url} alt="" />
                    </div>
                })
            }
        </div>
        <div>
            <img width={editingImage.width} height={editingImage.height} src={editingImage.url} alt="" />
        </div>
    </div>
  )
}

export default Home