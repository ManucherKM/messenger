//Библиотеки
import { toJS } from "mobx"
import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

//Компоненты
import UserLogo from "../../../../components/UserLogo/UserLogo"

//Утилиты
import chatController from "../../../../store/chat"

const FriendPanel = observer(() => {
    const navigate = useNavigate()


    const [friend, setFriend] = useState(
        chatController.chatRender.chatId !== undefined
            ? toJS(chatController.chatRender.friend)
            : {}
    )


    function redirect() {
        navigate(`/profile/${friend.id}`)
    }

    useEffect(() => {
        setFriend(
            chatController.chatRender.chatId !== undefined
                ? toJS(chatController.chatRender.friend)
                : {}
        )
    }, [chatController.chatRender])


    return (
        <div className="flex justify-between p-3 border-b bg-white dark:bg-dark dark:border-gray-600">
            <div className="flex">
                <div className="mr-5">
                    <UserLogo
                        path={`/profile/${friend.id}`}
                        stylesImg="w-[70px] h-[70px] object-cover"
                        srcImg={friend.urlImg}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <span onClick={redirect} className="text-black font-medium text-lg cursor-pointer hover:underline dark:text-white opacity-80">
                        {friend.name}
                    </span>
                    {friend.isOnline &&
                        <span className="text-base text-green cursor-default opacity-80 font-medium">
                            Онлайн
                        </span>
                    }
                    {!friend.isOnline &&
                        <span className="text-base opacity-50 font-medium text-black cursor-default dark:text-white">
                            Офлайн
                        </span>
                    }
                </div>
            </div>
            <div className="flex">
                <div className="m-auto">
                    <div className="p-4 rounded-xl cursor-pointer hover:bg-gray-100 mr-1 cameraChat dark:hover:bg-gray-600">
                        <svg width="25" height="20" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="cameraSvgChat" d="M2.53949 13.2305C1.86644 13.23 1.22109 12.9624 0.745082 12.4866C0.269071 12.0108 0.0012827 11.3656 0.000488281 10.6925V3.3085C0.00101796 2.63528 0.268689 1.98978 0.744729 1.51374C1.22077 1.0377 1.86627 0.77003 2.53949 0.769501L10.8465 0.769501C11.5025 0.770263 12.1328 1.02461 12.6056 1.47935C13.0785 1.93409 13.3572 2.55402 13.3835 3.2095L15.7835 2.2485C16.1813 2.0895 16.626 2.09498 17.0198 2.26375C17.4136 2.43252 17.7243 2.75075 17.8835 3.1485C17.9603 3.33919 17.9997 3.54291 17.9995 3.7485V10.2485C17.9997 10.5126 17.935 10.7727 17.8113 11.0061C17.6876 11.2394 17.5085 11.4389 17.2898 11.5869C17.0711 11.735 16.8194 11.8271 16.5568 11.8553C16.2941 11.8835 16.0286 11.8468 15.7835 11.7485L13.3835 10.7885C13.3572 11.444 13.0785 12.0639 12.6056 12.5187C12.1328 12.9734 11.5025 13.2277 10.8465 13.2285L2.53949 13.2305ZM1.38449 3.3085V10.6925C1.38502 10.9986 1.50691 11.2919 1.72343 11.5083C1.93994 11.7246 2.23342 11.8462 2.53949 11.8465H10.8465C11.1525 11.8462 11.4458 11.7246 11.6622 11.5082C11.8786 11.2919 12.0002 10.9985 12.0005 10.6925V3.3085C12.0002 3.00243 11.8786 2.70896 11.6623 2.49244C11.4459 2.27592 11.1526 2.15403 10.8465 2.1535H2.53949C2.23333 2.15403 1.93985 2.27589 1.72336 2.49238C1.50687 2.70887 1.38502 3.00234 1.38449 3.3085ZM16.3005 10.4695C16.3355 10.4833 16.3733 10.4884 16.4107 10.4843C16.4481 10.4802 16.4839 10.4671 16.515 10.446C16.5462 10.4249 16.5717 10.3965 16.5894 10.3633C16.607 10.3301 16.6164 10.2931 16.6165 10.2555V3.7555C16.6164 3.71789 16.607 3.68088 16.5894 3.64768C16.5717 3.61449 16.5462 3.58612 16.515 3.56503C16.4839 3.54394 16.4481 3.53077 16.4107 3.52667C16.3733 3.52257 16.3355 3.52766 16.3005 3.5415L13.3855 4.6995V9.2995L16.3005 10.4695Z" fill="#bbb" />
                        </svg>
                    </div>
                </div>
                <div onClick={redirect} className="m-auto">
                    <div className="p-4 rounded-xl cursor-pointer hover:bg-gray-100 infoChat dark:hover:bg-gray-600">
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="infoSvgChat" d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2ZM8.1 4.5H9.9V6.3H8.1V4.5ZM8.1 8.1H9.9V13.5H8.1V8.1Z" fill="#bbb" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default FriendPanel