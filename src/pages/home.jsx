import React , {useEffect, useState} from  'react'
import { Header,About,Skills, Project, Cta, Loader} from '../components';


const home = () => {

    const [isLoading, setIsLoading] = useState(false)

      useEffect(() => {
        setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
              }, 3000);
      }, [])
  return (
    <>
        {isLoading ? <Loader/> : <>  <Header/>
        <About/>
        <Skills/>
        <Project/>
        <Cta/>
        </>}
      
    </>
  )
}

export default home