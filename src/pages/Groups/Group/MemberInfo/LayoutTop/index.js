import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useClickOutSide } from "../../../../../Hooks/useClickOutSide";
import Button from "../../../../../Components/Button";
import { BsMessenger, BsThreeDots } from "react-icons/bs";
import { FaUserPlus, FaUserCircle, FaUserTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
function LayoutTop({ id, name, avt, background }) {
    const { groupId, userId } = useParams();
    const modalRef = useRef();
    const [showModal, setShowModal] = useState(false);
    useClickOutSide(modalRef, () => setShowModal(false));
    return (
        <div className="flex flex-col items-center w-full bg-gradient-to-b from-slate-400 via-white to-white mb-4">
            <div className=" w-max ">
                <img
                    className="w-[1100px] h-[350px] object-cover rounded-b-md"
                    src={background}
                    alt=""
                />
            </div>
            <div className="flex items-center justify-between w-[1000px] h-[84px] mx-auto mb-4">
                <div className="  flex min-w-[168px] h-full ">
                    <div className="relative w-[168px] h-[168px] mr-4">
                        <img
                            className="absolute top-[-84px] left-0 w-full h-full rounded-full border-4 border-white"
                            src={avt}
                            alt=""
                        />
                    </div>
                    <div className="flex items-center h-full">
                        <span className=" text-[32px] font-bold">{name}</span>
                    </div>
                </div>

                <div className=" flex float-right">
                    {+userId === 1 ? (
                        <Button
                            _className={
                                "flex items-center font-semibold p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                            }
                        >
                            <FaUserCircle className="text-[20px]" />
                            <span className="ml-2">
                                Xem trang cá nhân chính
                            </span>
                        </Button>
                    ) : (
                        <>
                            <Button
                                _className={
                                    "flex items-center font-semibold p-2 mr-4 bg-gray-200 rounded-md hover:bg-gray-300"
                                }
                            >
                                <BsMessenger className="text-[18px]" />
                                <span className="ml-2">Nhắn tin</span>
                            </Button>
                            <Button
                                _className={
                                    "flex items-center font-semibold p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                                }
                            >
                                <FaUserPlus className="text-[20px]" />
                                <span className="ml-2">Thêm bạn bè</span>
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between w-[1000px] h-[60px] border-t border-gray-300">
                <div className="flex justify-center items-center h-full w-[167px] border-b-[3px] border-blue-500">
                    <span className="text-blue-500 font-medium">
                        Bài viết trong nhóm
                    </span>
                </div>
                <div ref={modalRef} className=" relative flex justify-center">
                    <Button
                        _className={
                            "py-3 px-4 mr-4 bg-gray-200 rounded-md hover:bg-gray-300"
                        }
                        onClick={() => setShowModal(!showModal)}
                    >
                        <BsThreeDots />
                    </Button>
                    {showModal && (
                        <div
                            style={{
                                boxShadow: "rgb(142, 141, 141) 0px 1px 10px",
                            }}
                            className=" absolute top-[110%] w-[330px] flex flex-col p-2 bg-white rounded-md"
                        >
                            {+userId === 1 ? (
                                <Button
                                    _className={
                                        "flex items-center p-2 rounded-md hover:bg-gray-300"
                                    }
                                >
                                    <FiLogOut className=" text-[20px]" />
                                    <span className=" ml-2 font-semibold">
                                        Rời khỏi nhóm
                                    </span>
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        _className={
                                            "flex items-center p-2 rounded-md hover:bg-gray-300"
                                        }
                                    >
                                        <FaUserCircle className=" text-[20px]" />
                                        <span className=" ml-2 font-semibold">
                                            Xem trang cá nhân
                                        </span>
                                    </Button>
                                    <Button
                                        _className={
                                            "flex items-center p-2 rounded-md hover:bg-gray-300"
                                        }
                                    >
                                        <FaUserTimes className=" text-[20px]" />
                                        <span className=" ml-2 font-semibold">
                                            Chặn
                                        </span>
                                    </Button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LayoutTop;
