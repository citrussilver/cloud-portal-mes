<template>
    <div>
        <div class="common-container">
            <!-- Generate Bill Date picker -->
            <div class="top-form-elements">
                <div>
                    <label for="">사용년월</label>
                    <input type="date" class="lmargin-1dot5">
                </div>
            </div>
            <!-- Generate Bill -->
             <div class="buttons-wrapper">
                    <button class="common-button">당월요금생성</button>
                    <button class="common-button lmargin-1dot5">조회</button>
                </div>
            <div class="header-text-container colored-box-header">
                <span class="header-text-span">사용자별 요금현황 / 요금생성</span>
            </div>
            <div class="search-criteria">
                <div class="flex-common">
                    <label class="r-spacing">조회기간</label>
                    <input type="date" class="r-spacing">
                    <label class="r-spacing">~</label>
                    <input type="date">
                </div>
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
                            <th class="date-col">사용년월</th>
                            <th>업체코드</th>
                            <th>업체명</th>
                            <th>제품수</th>
                            <th>생산량</th>
                            <th>사용금액</th>
                            <th>요금구분</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>2021-11</td>
                            <td>1001</td>
                            <td>가나다 제조업</td>
                            <td>22</td>
                            <td>13,000</td>
                            <td>500,000</td>
                            <td>Basic 1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>2021-11</td>
                            <td>1002</td>
                            <td>대한 전자</td>
                            <td>100</td>
                            <td>65,000</td>
                            <td>800,000</td>
                            <td>Basic 2</td>
                        </tr>
                        <tr>
                            <td colspan="5">합계</td>
                            <td>78,000 </td>
                            <td>1,300,000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminExpenseDetails'
}
</script>

<style scoped>

.top-form-elements {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
}

</style>