import data from "./data";
import classes from "./Chat.Module.css"
function Chat() {
    return (
        <div className={classes.container}>
            <div className={classes.side_nav}>
                <div className={classes.profile}>
                    <img src="https://placekitten.com/350/350?image=10" alt=""/>
                </div>
                <div className={classes.icon_container}>
                    <i className={`${classes.fa} ${classes.fa_home}`}></i>
                </div>
                <div className={`${classes.icon_container}`}>
                    <i className={`${classes.fas}  ${classes.fa_calendar}`}></i>
                </div>
                <div className={`${classes.icon_container} ${classes.active}`}>
                    <i className={`${classes.fa} ${classes.fa_comment_alt}`}></i>
                </div>
                <div className={`${classes.icon_container}`}>
                    <i className={`${classes.fa} ${classes.fa_list}`}></i>
                </div>
                <div className={`${classes.icon_container}`}>
                    <i className={`${classes.fa} ${classes.fa_sticky_note}`}></i>
                </div>
            </div>
            <div className={`${classes.main_veiw}`}>
                <div className={`${classes.top_nav}`}>
                    <div className={`${classes.logo}`}>&lt CHAT APP /&gt</div>
                </div>
                <div className={`${classes.content}`}>
                    <div className={`${classes.message_list}`}>
                        <div className={`${classes.list_top}`}>
                            <input type="text"/>
                            <button className={`${classes.search}`}>
                                <i className={`${classes.fa} ${classes.fa_search}`}></i>
                                </button>
                            <button className={`${classes.add}`}>
                                    +
                                </button>
                            <button className={`${classes.close_list}`}>
                                <i className={`${classes.fa} ${classes.fa_chevron_left}`}></i>
                                </button>
                        </div>
                        <div className={`${classes.list}`}>
                            <div className={`${classes.contact} ${classes.unread}`}>
                                <div className={`${classes.icon}`}>
                                    <img src="https://placekitten.com/200/200" alt="kitten-image"/>
                                </div>
                                <div className={`${classes.blurb}`}>
                                    <h2 className={`${classes.name}`}>
                                        Steve Wiggins
                                    </h2>
                                </div>
                            </div>
                            <div className={`${classes.contact} ${classes.unread} ${classes.active}`}>
                                <div className={`${classes.icon}`}>
                                    <img src="https://placekitten.com/200/200?image=2" alt="kitten-image"/>
                                </div>
                                <div className={`${classes.blurb}`}>
                                    <h2 className={`${classes.name}`}>
                                        Invasion Force
                                    </h2>
                                </div>
                            </div>
                            <div className={`${classes.contact}`}>
                                <div className={`${classes.icon}`}>
                                    <img src="https://placekitten.com/550/555" alt="kitten-image"/>
                                </div>
                                <div className={`${classes.blurb}`}>
                                    <h2 className={`${classes.name}`}>
                                        John Doe
                                    </h2>
                                </div>
                            </div>
                            <div className={`${classes.contact}`}>
                                <div className={`${classes.icon}`}>
                                    <img src="https://placekitten.com/700/700?image=16" alt="kitten-image"/>
                                </div>
                                <div className={`${classes.blurb}`}>
                                    <h2 className={`${classes.name}`}>
                                        Maria Hugges
                                    </h2>
                                </div>
                            </div>
                            <div className={`${classes.contact}`}>
                                <div className={`${classes.icon}`}>
                                    <img src="https://placedog.net/400/400" alt="puppy-image"/>
                                </div>
                                <div className={`${classes.blurb}`}>
                                    <h2 className={`${classes.name}`}>
                                        Commander Dave
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.chat}`}>
                        <div className={`${classes.top}`}>
                            <div className={`${classes.open_message}`}>
                                <i className={`${classes.fa} ${classes.fa_chevron_left}`}></i>
                            </div>
                            <div className={`${classes.name}`} id="open">
                                Invasion Force
                            </div>
                            <div className={`${classes.button_container}`}>
                                <button>
                                    <i className={`${classes.fa} ${classes.fa_phone}`}></i>
                                </button>
                                <button>
                                    <i className={`${classes.fa} ${classes.fa_camera}`}></i>
                                </button>
                                <button>
                                    <i className={`${classes.fa} ${classes.fa_folder}`}></i>
                                </button>
                            </div>
                        </div>
                        <div className={`${classes.message_container}`}>
                            <div className={`${classes.comment} ${classes.me}`}>
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                    <div className={`${classes.bubble}`}>
                                        <img src="https://dummyimage.com/400x400/ddd/fff" alt=""/>
                                    </div>
                            </div>
                            <div className={`${classes.comment} ${classes.me}`}>
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        Let me know if this works
                                    </div>
                            </div>
                            <div className={`${classes.comment} ${classes.other}`}>
                                <img src="https://placekitten.com/700/700?image=16" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        yes this is great
                                    </div>
                            </div>
                            <div className={`${classes.divider}`}><span>
                                Feb 8 12:01
                            </span></div>
                            <div className={`${classes.comment} ${classes.other}`}>
                                <img src="https://placekitten.com/700/700?image=12" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        Did you find a place for monday's metting?
                                    </div>
                            </div>
                            <div className={`${classes.comment} ${classes.me}`}>
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        I found a couple venues. The one on meeting street seems nice.
                                    </div>
                            </div>
                            <div className={`${classes.comment} ${classes.me}`}>
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        can you give me some guidelines to follow as I look for one?
                                    </div>
                            </div>
                            <div className={`${classes.comment} ${classes.other}`}>
                                <img src="https://placekitten.com/1000/1000?image=12" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        Here's a link to a good one. It should be avalible.
                                        <a href="#">venues.com</a>
                                    </div>
                            </div>
                            <div className={`${classes.divider}`}>
                                <span>Today 8:58 PM</span>
                            </div>
                            <div className={`${classes.comment}  ${classes.me}`}>
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        Are we still holding the metting on monday?
                                    </div>
                            </div>
                            <div class="comment other">
                                <img src="https://placekitten.com/1000/1000?image=12" alt=""/>
                                <div className={`${classes.bubble}`}>
                                        Yeah, can you bring napkins?
                                    </div>
                            </div>
                            <div class="comment other">
                                <img src="https://placekitten.com/700/700?image=16" alt=""/>
                                    <div class="bubble">
                                        I've got napkins covered 👍
                                    </div>
                            </div>
                            <div class="comment me">
                                <img src="https://placekitten.com/300/300?image=10" alt=""/>
                                    <div class="bubble">
                                        How do you feel about terraforming?
                                    </div>
                            </div>
                            <div class="comment other">
                                <img src="https://placekitten.com/1000/1000?image=12" alt=""/>
                                    <div class="bubble">
                                        I feel like thats's a bit off topic.
                                    </div>
                            </div>
                        </div>
                        <div class="input-container">
                            <button class="attach">
                                <i class="fa fa-paperclip"></i>
                            </button>
                            <div class="textarea-container">
                                <textarea type="text" placeholder="message"></textarea>
                            </div>
                            <button class="send">
                                <i class="fa fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    <div class="contact-detail">
                        <button class="close">
                            x
                        </button>
                        <img src="https://placekitten.com/200/200?image=2" alt=""/>
                            <h3>Invasion Force</h3>
                            <div class="bio">
                                A bunch of great weirdos
                            </div>
                            <ul class="contact-list">
                                <li>
                                    <img class="contact-img" src="https://placekitten.com/700/700?image=16" alt=""/>
                                        <span class="name">
                                            Maria Hugges
                                        </span>
                                </li>
                                <li>
                                    <img class="contact-img" src="https://placekitten.com/1000/1000?image=12" alt=""/>
                                        <span class="name">
                                            Lucy Farrel
                                        </span>
                                </li>
                                <li>
                                    <img class="contact-img" src="https://placekitten.com/540/540" alt=""/>
                                        <span class="name">
                                            Your Neighbor
                                        </span>
                                </li>
                                <li>
                                    <img class="contact-img" src="https://placedog.net/300/300" alt=""/>
                                        <span class="name">
                                            Sam Willis
                                        </span>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
