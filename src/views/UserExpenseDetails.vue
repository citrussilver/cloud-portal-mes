<template>
    <div>
        <div class="userexpense-content">
            <!-- <h2>My Page</h2> -->
            <div id="buttons-wrapper">
                <button class="common-button">조회</button>
                <button class="common-button l-spacing">닫기</button>
            </div>
            <div id="header-text">
                <span id="header-text-span">모 니 터 링</span>
            </div>
            <div id="search-criteria">
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
            <div id="table-div">
                <table id="table-style">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>사용년월</th>
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
export default {
    name: 'UserExpenseDetails'

}
</script>

<style>

.userexpense-content {
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