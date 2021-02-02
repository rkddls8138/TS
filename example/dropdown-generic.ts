interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface productNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFlase {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(
  item:
    { value: string; selected: boolean } |
    { value: number; selected: boolean }
    ) {
  // option이라는 변수에 속성을 추가하는 메소드를 대입합니다.
  const option = document.createElement('option');
  // option을 사용해 속성을 추가합니다.
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});