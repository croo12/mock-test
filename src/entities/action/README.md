## Action

Action은 사용자가 만든 동작을 추상화한 객체임.
Method + Element 로 존재해야함

```
find <div id="main-box" />
click <button />
```

이런 느낌이 되면 좋겠다.

사용자가 발사한 이벤트들을 이렇게 action entity의 배열로 만든다.
그리고 이 action entity를 읽어서 컴퓨터가 사용자가 의도한 동작을 수행한다.