import Head from 'next/head'
import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [emojit, setEmoji] = useState();

  const getRandomEmoji = (cat, sub) => {

    let emojis = {
        'Smileys & Emotion': {
            'face-smiling':['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇'],
            'face-affection':['🥰','😍','🤩','😘','😗','☺','😚','😙'],
            'face-tongue':['😋','😛','😜','🤪','😝','🤑'],
            'face-hand':['🤗','🤭','🤫','🤔'],
            'face-neutral-skeptical':['🤐','🤨','😐','😑','😶','😶‍🌫️','😏','😒','🙄','😬','😮','🤥'],
            'face-sleepy':['😌','😔','😪','🤤','😴'],
            'face-unwell':['😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯'],
            'face-hat':['🤠','🥳'],
            'face-glasses':['😎','🤓','🧐'],
            'face-concerned':['😕','😟','🙁','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱'],
            'face-negative':['😤','😡','😠','🤬','😈','👿','💀','☠'],
            'face-costume':['💩','🤡','👹','👺','👻','👽','👾','🤖'],
            'cat-face':['😺','😸','😹','😻','😼','😽','🙀','😿','😾'],
            'monkey-face':['🙈','🙉','🙊'],
            'emotion':['💋','💌','💘','💝','💖','💗','💓','💞','💕','💟','❣','💔','❤️‍🔥','❤️‍🩹','❤','🧡','💛','💚','💙','💜','🤎','🖤','🤍','💯','💢','💥','💫','💦','💨','🕳','💣','💬','👁️‍🗨️','🗨','🗯','💭','💤'],
        }
    }

    const random = (array) => array[~~(Math.random() * array.length)]

    if(!emojis[cat])
        cat = random(Object.keys(emojis))

    if(!emojis[cat][sub])
        sub = random(Object.keys(emojis[cat]))

    var randomEmoji = random(emojis[cat][sub])

    setEmoji(randomEmoji)

}

useEffect(() =>{

  getRandomEmoji()

},[])


  return (
    <>
      <Head>
        <title>Emoji Discord</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>
      <main>


      <div class='grid  h-screen place-items-center'>

        <h1 class='text-center hover:text-7xl hover:filter-none animation duration-100 ease-in-out filter grayscale text-5xl' onMouseOver={getRandomEmoji}>{emojit}</h1>
        <h1 class='text-center hover:text-7xl hover:filter-none animation duration-100 ease-in-out filter grayscale text-5xl' onMouseOver={getRandomEmoji}>{emojit}</h1>
        <h1 class='text-center hover:text-7xl hover:filter-none animation duration-100 ease-in-out filter grayscale text-5xl' onMouseOver={getRandomEmoji}>{emojit}</h1>
        <h1 class='text-center hover:text-7xl hover:filter-none animation duration-100 ease-in-out filter grayscale text-5xl' onMouseOver={getRandomEmoji}>{emojit}</h1>

      </div>  


      <div class='fixed bottom-0 flex justify-center w-full'>
      <a href='https://github.com/DaviFernandesDaSilva' target='_blank'>
      <h1 class='hover:scale-125 animation duration-200 text-gray-200 text-sm text-center p-2'>Made with ❤ by Davi Fernandes</h1>
      </a>
      </div>  


      </main>
    </>
  )
}
