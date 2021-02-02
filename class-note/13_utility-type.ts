interface Product {
    id: number,
    name: string,
    price: number,
    brand: string,
    stock: number
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product> {
    //..
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// Pick을 이용하여 기존의 인터페이스에서 원하는 타입만 가져올수 있습니다. --유틸리티 타입 | 어드밴스 타입 | 제네릭 타입
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
function displayProductDetail(shppingItem: ShoppingItem) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// #3
type UserProfileKeys = keyof UserProfile

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4 
type Subset<T> = {
    [p in keyof T]?: T[p]
}