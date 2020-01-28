2020-01-20

## Management System

[React와 Node.js를 활용한 고객관리시스템](https://www.youtube.com/watch?v=s2knmog2j1U&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB&index=1)

---

## [nodejs](https://nodejs.org) 환경설정

- nodejs
- node -v
- npm -v
- npm install -g create-react-app
- create-react-app .

## git

- git repository 생성
- git init
- git commit -am "first commit"
- git remote add origin https://github.com/utober/React-Management-Tutorial.git
- git push -u origin master // git push --set-upstream origin master

## Project

- material-UI
  > npm install @material-ui/core

## Node.js Express 서버 개발환경 구축

- client 폴더 생성 후 파일 모두 이동
- package.json 만들기 -- 서버와 클라이언트 동시 실행토록 설정 만들기
- npm install
- npm install -g nodemon
- server.js 설정

## REST API 구축하기
- https://jsonlint.com :: 정상적인 Json data 인지 확인
- client package.json proxy 설정

## React 라이프사이클
- constructor()
- componentWillMount()
- render()
- componentDidMount()
- props or state => shouldComponentUpdate() ==> render()

## AWS RDS 서비스 이용하여 MySQL DB 구축하기
- [아마존](https://aws.amazon.com)
- login ==> AWS Management Console => AWS 서비스 찾기 "cost" (AWS Cost Explorer) :: 비용탐색기 먼저 확인
- RDS 이동

**Amazon RDS**
- Database 생성
- RDS 프리티어에 적용되는 옵션만 사용 [check]
- MySQL 선택
- MySQL 5.6.x
- DB 인스턴스 식별자 => Database 이름
- 마스터 사용자 이름/암호 => DB 접속이름/암호
- 고급설정
  - 퍼블릭 액세스 가능성 [예]
  - 데이터베이스이름 [xxx]
  - 데이터베이스 생성
  - DB 인스턴스 세부정보 보기 => 설정 내용 확인
- 한글사용을 위한 설정 ==> 파라미터 그룹이동
  - 파라미터 그룹 생성 ==> 그룹 이름/설명 작성 후 생성
  - 위에 생성된 파라미터 그룹 편집
  - [char] 검색 후 결과들 [utf8]로 설정 내용 지정 :: 저장
  - [collation] 검색 후 나온 모든 결과들 [utf8] 지정 후 저정 :: 변경사항 저장
- Database에 적용하기
  - Dashboard > DB 인스턴스 > 적용할 DB [xxx] 선택 > 수정(사용가능 상태일때)
  - DB파라미터그룹 위에서 설정한 그룹으로 지정 > 계속 :: 즉시적용 
  - 재부팅 (변경사항 반영)

**MySQL 접속 :: heidisql**
- 설치 :: https://heidisql.com 
- 세션만들기
  - 호스트명 :: aws > 데이터베이스 > 엔드포인트 :: 접속할 수 있는 URL 주소
  - 사용자 / 암호 :: aws에서 만든 사용자/암호
  - 접속전 aws 보안그룹 확인 필요 :: aws > database > vpc 보안그룹 (aws에서 제공하는 방화벽기능)능
    - 인바운드 > 편집 :: 소스수정 [0.0.0.0/0] :: 어디서나 접속 가능
  - 접속
- AWS DB 접속
  - USE management;
  - SELECT VERSION();
  
**MySQL 고객 테이블 구축**
```sql
USE management;
CREATE TABLE CUSTOMER (
  id INT PRIMARY KEY AUTO_INCREMENT,
  image VARCHAR(1024),
  name VARCHAR(64),
  birthday VARCHAR(64),
  gender VARCHAR(64),
  job VARCHAR(64)
) DEFAULT CHARACTER SET UTF8 COLLATE utf8_general_ci;

INSERT INTO CUSTOMER VALUES (1, 'https://placeimg.com/64/64/any', '홍길동', '960101', '남자', '대학생');
INSERT INTO CUSTOMER VALUES (2, 'https://placeimg.com/64/64/any', '홍길동', '960102', '여자', '프로그래머');
INSERT INTO CUSTOMER VALUES (3, 'https://placeimg.com/64/64/any', '홍길동', '960103', '남자', '대학생');

SELECT * FROM CUSTOMER;
```

**.gitignore**
- database 내용 추가

## mysql Module 설치
- npm install mysql

## 고객 추가양식(Form) & 이벤트 핸들링

- cd client
- npm install axios

## 파일 업로드 요청 처리 및 DB에 데이터 삽입
- npm install multer
- /upload :: .gitignore 파일에 추가 (업로드 이미지)

## DB
-  ALTER TABLE CUSTOMER ADD createdDate DATETIME;
-  ALTER TABLE CUSTOMER ADD isDeleted INT;
-  UPDATE CUSTOMER SET createdDate = NOW();
-  UPDATE CUSTOMER SET isDeleted = 0

## material UI icons library
- cd client
- npm install @material-ui/icons

