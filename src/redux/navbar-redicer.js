let initState = {
    lastActive: [
        {img: 'https://sun9-81.userapi.com/c5660/u110523123/-6/z_5779c98b.jpg', status: 'online'},
        {
            img: 'https://sun7-8.userapi.com/impf/c628728/v628728152/37830/m-CWsgx2cy4.jpg?size=610x915&quality=96&sign=053b74e7bf58fde62a3327baa1032bbf&type=album',
            status: 'last seen 40 min'
        },
        {
            img: 'https://i.etsystatic.com/isla/8433c7/36279887/isla_fullxfull.36279887_akc94h7m.jpg?version=0',
            status: 'last seen yesterday'
        }
    ]
};

const navbarReducer = (state = initState, /*action*/) => {
    return state;
}

export default navbarReducer;