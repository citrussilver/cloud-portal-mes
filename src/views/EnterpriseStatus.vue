<template>
    <div>
        <div class="common-container">
            <div class="buttons-wrapper">
                <button class="common-button">조회</button>
            </div>
            <div class="header-text-container colored-box-header plus-lr-margin">
                <span class="header-text-span">업체현황</span>
            </div>
            <div class="search-criteria">
                <div class="flex-common">
                    <label class="r-spacing">업체코드/명</label>
                    <input type="text">
                </div>
            </div>
            <div class="table-div">
                <table class="table-style">
                    <thead>
                        <tr>
                            <th class="num-col">번호</th>
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
                            <td>서울시 강남구 청담동 서울시 강남구 청담동 서울시 강남구 청담동 서울시 강남구 청담동 서울시 강남구 청담동</td>
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

</style>