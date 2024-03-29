import { useState } from "react";
import Navtem from "./NavItem";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups, MdOndemandVideo } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoMdTime } from "react-icons/io";
import { BiArrowToBottom } from "react-icons/bi";
import avatar from "../../../assets/images/avatar/avatar.jpg";

function LayoutLeft() {
    return (
        <div className="w-full h-full">
            <div className=" pb-2 border-b border-gray-300">
                <ul className=" ">
                    <Navtem to={"/profile/1"} text={"Nguyễn Tú Anh"}>
                        <img
                            className=" rounded-full"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/friends"}
                        text={"Bạn bè"}
                        iconClassName=" bg-friendIcon"
                    />
                    <Navtem
                        to={"/groups"}
                        text={"Nhóm"}
                        iconClassName="bg-groupIcon"
                    />
                    <Navtem
                        to={"/videos"}
                        text={"Watch"}
                        iconClassName="bg-watchIcon"
                    />
                    <Navtem
                        to={"/marketplace"}
                        text={"Marketplace"}
                        iconClassName="bg-marketplaceICon"
                    />
                </ul>
            </div>
            <div className=" pt-3 ">
                <p className=" font-semibold text-gray-500">Lối tắt của bạn</p>
                <ul className=" py-3">
                    <Navtem to={"/group/12"} text={"Giao Lưu - Blue Sky"}>
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online Sv5 - Katana"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online Sv7 - Sanzu"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem to={"/profile"} text={"Công Nghệ Thông Tin 4 K19"}>
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    <Navtem
                        to={"/profile"}
                        text={"Ninja School Online(10 Năm một hành trình)"}
                    >
                        <img
                            className=" rounded-lg"
                            src={avatar}
                            alt="avatar"
                        />
                    </Navtem>
                    {/* <Navtem text={"Xem thêm"}>
                        <BiArrowToBottom className=" text-[30px] p-2 rounded-full bg-slate-300 text-black" />
                    </Navtem> */}
                </ul>
            </div>
        </div>
    );
}

export default LayoutLeft;
