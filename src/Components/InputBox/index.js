import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ScreenSize } from "../../App";
import MainCard from "../MainCard";
import ToolItem from "./ToolItem";
import SendPosts from "../Modal/SendPosts";
import avatar from "../../assets/images/avatar/avatar.jpg";
function InputBox() {
    const context = useContext(ScreenSize);
    const [openSenPosts, setOpenSenPosts] = useState(false);
    const [addImg, setAddImg] = useState(false);
    const changeModalSenPosts = () => setOpenSenPosts(!openSenPosts);

    return (
        <>
            {openSenPosts && (
                <SendPosts
                    addImg={addImg}
                    closeModal={() => {
                        setAddImg(false);
                        setOpenSenPosts(false);
                    }}
                />
            )}
            <MainCard>
                <div className="flex flex-col p-2">
                    <div className="flex w-full border-b p-2 border-gray-300">
                        <Link
                            to={"/profile/1"}
                            className="block h-[40px] w-[40px] rounded-full overflow-hidden"
                        >
                            <img
                                className="h-full w-full object-cover object-center"
                                src={avatar}
                                alt=""
                            />
                        </Link>
                        <span
                            className="flex-1 flex w-full p-2 pl-3 ml-2 rounded-full cursor-pointer bg-slate-100 items-center text-slate-500 hover:bg-hover"
                            onClick={changeModalSenPosts}
                        >
                            Tu Anh ơi, bạn đang nghĩ gì thế?
                        </span>
                    </div>
                    <div className="flex pt-2">
                        <div className="w-[50%] sm:w-[30%]">
                            <ToolItem
                                text={"Video trực tiếp"}
                                cursor="cursor-not-allowed"
                            >
                                <img
                                    className="w-6 h-6"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                                    alt=""
                                />
                            </ToolItem>
                        </div>
                        <div className="w-[50%] sm:w-[30%]  ">
                            <ToolItem
                                text={"Ảnh/video"}
                                onClick={() => {
                                    setAddImg(true);
                                    setOpenSenPosts(true);
                                }}
                            >
                                <img
                                    className="w-6 h-6"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                                    alt=""
                                />
                            </ToolItem>
                        </div>
                        {context.width >= 640 && (
                            <div className="w-[40%]  ">
                                <ToolItem text={"Cảm xúc/Hoạt động"}>
                                    <img
                                        className="w-6 h-6"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                                        alt=""
                                    />
                                </ToolItem>
                            </div>
                        )}
                    </div>
                </div>
            </MainCard>
        </>
    );
}

export default InputBox;
