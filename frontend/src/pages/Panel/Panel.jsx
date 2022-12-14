//Навигационное меню
import Navbar from "../../components/Navbar/Navbar"

//Список сообщений
import PanelList from "./PanelList/PanelList"

//Компоненты
import Chat from './Chat/Chat'

const Panel = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className='flex w-[calc(100vw-80px)]'>
        <div className="border-r bg-white dark:bg-dark dark:border-gray-600">
          <PanelList />
        </div>
        <Chat />
      </div>
    </div>
  )
}

export default Panel