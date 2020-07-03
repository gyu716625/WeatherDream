# NOTICE!
+ new branch 만들 때 꼭 upstream 의 dev branch를  git pull upstream dev 후 npm install 하고 branch 생성하기.  

+ new module 추가 시 npm install --save 모듈이름  예) npm install --save nodemon
+ --save를 써야 package.json 에 추가되어 팀원이 npm install 시 작성자와 같은 환경에서 테스트 및 작업 가능.



# Commit Rule 
+ commit 첫 줄은 Type : 간략한 type에 대한 설명 그 다음 한 줄 띄고 body 입력
+ body엔 위 커밋 내용에서 어떤일이 일어났는지 (수정, 추가 등등) 한 줄 안띄고!
+ 스타일 설명(css 등)

# PR Rule

- PR title ==> commit type/이슈번호/이슈제목
- PR 시 해당 이슈에만 Link 걸기 sprint NONO.

## PR template
> ### PR 내용
> ### 닫을 이슈
> ### 소요시간

