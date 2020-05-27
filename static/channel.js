document.addEventListener('DOMContentLoaded', () => {

    // WebSocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
    const name = localStorage.getItem('user');

    

    document.querySelectorAll("#show_channel").forEach(funct => {
        funct.onclick = () => {
            const chosen_channel = funct.dataset.channel;
            localStorage.setItem('chosen_channel', chosen_channel);
            document.querySelector('#messages').delete(li)
            // join
            socket.emit('join', {'room': chosen_channel, 'name': name});
            // do not reload
            return false;
        };
    });

if (localStorage.getItem('chosen_channel'))
{
// when user is known and room is stored, join the right room straight away (e.g. after opening the page)
    const chosen_channel = localStorage.getItem('chosen_channel');
    socket.emit('join', {'room': chosen_channel, 'name': name});
}
// if no room is stored locally, join the main channel-
else localStorage.setItem('chosen_channel', 'General');


});