// Reducers

const songsReducer = () => {
    return [
        {
            title: '帰り道は遠回りしたくなる',
            duration: '4:05'
        }, {
            title: '命は美しい',
            duration: '3:29'
        }, {
            title: '気づいたら片想い',
            duration: '3:30'
        }, {
            title: '他の星から',
            duration: '4:20'
        }
    ];
};

const selectedSongReduer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}