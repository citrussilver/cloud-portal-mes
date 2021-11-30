<template>
    <div>
        <div class="common-container">
            <div class="buttons-wrapper">
                <button class="common-button">조회</button>
            </div>
            <div class="header-text-container">
                <span class="header-text-span">모 니 터 링</span>
            </div>
            <div class="search-criteria">
                <div class="flex-common">
                    <label class="common-rspacing">사용년월</label>
                    <input type="date" class="common-rspacing">
                    <label class="common-rspacing">~</label>
                    <input type="date">
                </div>
                <div class="flex-common">
                    <label class="common-rspacing">업체명: </label>
                    <label>가나다 제조회사</label>
                </div>
            </div>
            <div class="table-div">
                <table class="table-style">
                    <thead>
                        <tr>
                            <th class="num-col">번호</th>
                            <th class="date-col">사용년월</th>
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
                            <td>22</td>
                            <td>13,000</td>
                            <td>500,000</td>
                            <td>Basic 1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>2021-10</td>
                            <td>2,741</td>
                            <td>17,000</td>
                            <td>500,000</td>
                            <td>Standard</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>2021-10</td>
                            <td>3,973</td>
                            <td>1,256,753</td>
                            <td>1,500,000</td>
                            <td>Premium</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <!-- <td data-label="Date">2021-11</td> -->
                            <td>2021-10</td>
                            <td>33</td>
                            <td>17,000</td>
                            <td>800,000</td>
                            <td>Basic 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

// import { methods, callApi } from "serverAPI";

export default {
    name: 'UserExpenseDetails'

}
</script>

<style>
</style>