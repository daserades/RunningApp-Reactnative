export default (state, action) => {
    switch (action.type) {

        case 'SET_EMAIL': {
            const email=action.payload.userEmail
            return { ...state, userEmail: email};
        }
        case 'SET_NAME': {
            const name=action.payload.userName
            return { ...state, userName: name};
        }
        case 'SET_SURNAME': {
            const surname=action.payload.userSurname
            return { ...state, userSurname: surname};
        }
        case 'SET_PASSWORD': {
            const password=action.payload.userPassword
            return { ...state, userPassword: password};
        }
        case 'SET_USERID': {
            const id=action.payload.userId
            return { ...state, userId: id};
        }
        {/* case 'SET_FAVORITE_HEROES': {
            return { ...state, favoriteHeroes: action.payload, loading: false };
        }
        case 'SET_FAVORITE_COMICS': {
            return { ...state, favoriteComics: action.payload, loading: false };
        }
        case 'SET_LOADING': {
            return { ...state, loading: true };
        }
        case 'SET_ERROR': {
            const updatedErrorLog = [...state.errorLog, action.payload];
            return { ...state, errorLog: updatedErrorLog };
        }

        case 'SET_HEROES': {
            return { ...state, heroList: action.payload, loading: false };
        }
        case 'SET_COMICS': {
            return { ...state, comicList: action.payload, loading: false };
        }
        case 'SET_FAVORITE_HEROES': {
            return { ...state, favoriteHeroes: action.payload, loading: false };
        }
        case 'SET_FAVORITE_COMICS': {
            return { ...state, favoriteComics: action.payload, loading: false };
        }
        case 'GET_FAVORITE_HEROES': {
            return { ...state.favoriteHeroes }
        }
        case 'GET_FAVORITE_COMICS': {
            return { ...state.favoriteComics }
        }
        case 'SET_LANGUAGE': {
            return { ...state, language: action.payload }
        }
        case 'SET_MODE': {
            return { ...state, mode: action.payload }
        } */}

        default:
            return state;
    }
};