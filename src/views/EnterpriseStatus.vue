<template>
    <div>
        <div class="admin-expense-content">
            <div id="buttons-wrapper">
                <button class="common-button">조회</button>
                <button class="common-button l-spacing">닫기</button>
            </div>
            <div id="header-text">
                <span id="header-text-span">모 니 터 링</span>
            </div>
            <div id="search-criteria">
                <div class="flex-common">
                    <label class="common-rspacing">업체코드/명</label>
                    <input type="text">
                </div>
            </div>
            <div id="table-div">
                <table id="table-style">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>업체코드</th>
                            <th>업체명</th>
                            <th>대표자명</th>
                            <th>사업자번호</th>
                            <th>주소</th>
                            <th>상세주소</th>
                            <th>전화번호</th>
                            <th>가입일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>1001</td>
                            <td>가나다 제조업</td>
                            <td>홍길동</td>
                            <td>1234567890</td>
                            <td>서울시 강남구 청담동</td>
                            <td>123</td>
                            <td>02-1234-5678</td>
                            <td>2021-11-22</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>1002</td>
                            <td>대한 전자</td>
                            <td>김대표</td>
                            <td>4567892130</td>
                            <td>경기도 수원시 권선구</td>
                            <td>456</td>
                            <td>031-4563-9050</td>
                            <td>2021-11-30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EnterpriseStatus'
}
</script>

<style>

.admin-expense-content {
    display: flex;
    flex-direction: column;
    margin: 2rem 3rem;
    padding: 0rem 20rem;
    font-size: 2rem;
}

#buttons-wrapper {
    margin-left: auto;
}

.common-rspacing {
  margin-right: 1rem;
}

.l-spacing {
    margin-left: 1.5rem;
}

.common-button {
    padding: 0.5rem 1.5rem;
    font-size: 2.5rem;
}

#header-text {
    margin-top: 3rem;
    height: 4.5rem;
    background-color: #f8cbad;
    border: 1px solid #41719c;
    border-radius: 0.5rem;
    text-align: center;
}

#header-text-span {
    position: relative;
    bottom: -1rem;
    font-size: 3.5rem;
}

#search-criteria {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
}

#table-div {
    margin-top: 2rem;
}

#table-style {
    width: 100%;
}

/* thead tr {
  border: 1px solid #41719c;
} */

th, td {
    border: 1px solid #000;
}

td {
    text-align: center;
}

thead th {
    padding: 0.5rem 2rem;
    color: #000;
    text-align: center;
}

</style>