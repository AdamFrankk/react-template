import React, { useState, useEffect } from "react";
import style from "./account.module.scss";
import ProfileInfo from "components/account/info";
import ProfilePhoto from "components/account/photo";
import ProfileLinks from "components/account/links";
import ProfileNews from "components/account/news";
import Viewer from "components/account/viewer";
import { getBalance, getBilling, getNews, getReferals, getSponsors, getUserStats } from "state/actions";

const data: Array<{ id: number }> = [{ id: 1 }
      {
        photo: "/photos/referal.png",
        label: "Ivan",
        id: ((min, max) => Math.random() * (max - min) + min)(0, 9999)
      },
      {
        photo: "/photos/referal.png",
        label: "Ivan",
        id: ((min, max) => Math.random() * (max - min) + min)(0, 9999)
      },
      {
        photo: "/photos/referal.png",
        label: "Ivan",
        id: ((min, max) => Math.random() * (max - min) + min)(0, 9999)
      }
];

const AccountPage = () => {
    const [photo, setPhoto] = useState(null);

    const dispatch = useDispatch();
    const { id, token, userInfo, sponsorsList, referalsList } = useSelector((state) => ({
        id: state.root.authReducer.id,
        token: state.root.authReducer.token,
        userInfo: state.root.userReducer.userInfo,
        sponsorsList: state.root.userReducer.sponsors,
        referalsList: state.root.userReducer.referals
    }));

    useEffect(() => {
        if (token !== "") {
            const sponsorsData = {
                token: token,
                count: 12
            };
            const referalsData = {
                token: token,
                count: 19,
                offset: 0
            };
            const newsData = {
                token: token,
                count: 2,
                offset: 0,
                section: "news"
            };
            const balanceData = {
                token: token,
                user_id: id
            };
            const billingData = {
                token: token
            };
            dispatch(getSponsors(sponsorsData));
            dispatch(getReferals(referalsData));
            dispatch(getNews(newsData));
            dispatch(getBalance(balanceData));
            dispatch(getBilling(billingData));
            dispatch(getUserStats(balanceData));
        }
    }, [token]);

    useEffect(() => {
        setPhoto(userInfo.user_photo);
    }, [userInfo]);

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.content_right}>
                    <div className={` ${style.content_right_section} ${style.content_right_section_left}`}>
                        <div className={`${style.content_right_section_content} ${style.content_right_section_content_left}`}>
                            <ProfilePhoto img_src={photo} />
                            <div className="u-mb-md"></div>
                            <Viewer list={referalsList} title={"My referrals"} />
                            <div className="u-mb-md"></div>
                            <Viewer list={sponsorsList} title={"My sponsors"} />
                        </div>
                    </div>
                    <div className={style.content_right_section}>
                        <div className={style.content_right_section_content}>
                            <ProfileInfo />
                            <div className="u-mb-md"></div>
                            <ProfileLinks />
                            <div className="u-mb-md"></div>
                            <ProfileNews />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
