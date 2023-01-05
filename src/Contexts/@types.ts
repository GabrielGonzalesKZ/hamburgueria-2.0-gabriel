export interface iDefaultProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    email: string;
    name: string;
    id: number;
}

export interface iUserLogin {
    email: string;
    password: string;
}

export interface iUserLoginResponse {
    accessToken: string;
    user: iUser
}

export interface iUserRegister {
    email: string;
    name: string;
    password: string;
}

export interface iUserRegisterResponse {
    accessToken: string;
    user: iUser
}

export interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export interface iUserContext {
    registerUser: (data: iUserRegister) => void;
    login: (data: iUserLogin) => void;
}

export interface iAuthContext {
    loading: true | false;
    setLoading: any
    showModal: true | false;
    setShowModal: any
    listProducts: [] | iProduct[]
    setListProducts: any
    search: [] | iProduct[]
    setSearch: any;
    user: iUser | iProduct | null;
    setUser: any;
}

export interface iCartContext {
    addCart: (product: iProduct) => void;
    removeToken: () => void;
    cartList: [] | iProduct[];
    setCartList: any;
    searchProduct: ({ target }: any) => void;
}