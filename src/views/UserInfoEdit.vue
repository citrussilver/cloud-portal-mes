<template>
    <div>
        <div class="user-info-content">
            <div id="header-text">
                <span id="header-text-span">회 원 정 보  수정</span>
            </div>
            <div id="details-content">
                <div class="grid-container">
                    <div id="grid-wrapper">
                    <div class="grid-col" id="grid-col-labels">
                        <label for="">회원 ID</label>
                        <label for="">회원명</label>
                        <label for="">비밀번호</label>
                        <label for="">비밀번호확인</label>
                        <label for="">이메일</label>
                    </div>
                    <div class="grid-col">
                        <input type="text">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <input type="text"><label style=" margin-left: 3rem;">회원명</label><input type="text">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <input type="text"><label style="white-space: nowrap; margin-left: 3rem;">HP 번호</label><input type="text">
                        </div>
                        <input type="text">
                        <input type="text" style="width: 100%;">
                    </div>
                    <div class="grid-col"></div>
                    <div class="grid-col"></div>
                </div>
                <div id="grid-wrapper">
                    <div class="grid-col" id="grid-col-labels">
                        <label for="">회사코드</label>
                        <label for="">산업군</label>
                        <label for="">사업자구분</label>
                        <label for="">사업장주소</label>
                        <label for="">상세주소</label>
                    </div>
                    <div class="grid-col">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <input type="text"><label style="margin-left: 6.55rem">회사명</label><input type="text">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <select name="Icecream Flavours" class="custom-dropdown">
                                <option value="opt1">전자</option>
                                <option value="opt2">전자</option>
                                <option value="opt3">전자</option>
                                <option value="opt4">전자</option>
                            </select>
                            <label style=" margin-left: 3rem;">사업자번호</label><input type="text">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <select name="Icecream Flavours" class="custom-dropdown">
                                <option value="opt1">법인</option>
                                <option value="opt2">법인</option>
                                <option value="opt3">법인</option>
                                <option value="opt4">법인</option>
                            </select>
                            <label style="white-space: nowrap; margin-left: 4.55rem;">대표자명</label><input type="text">
                        </div>
                        <input type="text">
                        <input type="text" style="width: 100%;">
                    </div>
                    <div class="grid-col"></div>
                    <div class="grid-col"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfoEdit'

}
</script>

<style scoped>

.user-info-content {
    display: flex;
    flex-direction: column;
    margin: 2rem 3rem;
    padding: 0rem 20rem;
    font-size: 2rem;
}

.common-rspacing {
  margin-right: 1rem;
}

.l-spacing {
    margin-left: 1.5rem;
}

.auto-lmargin {
    margin-left: auto;
}

#header-text {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
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

#details-content {
    border: 1px solid #000;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    white-space: nowrap;
}

#flex-wrapper, .flex-item-row, .flex-item-row-item {
    display: flex;
}

#flex-wrapper {
    padding: 5rem;
}

.flex-item-row {
    justify-content: space-between;
}

.flex-item-row-item {
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-align: right;
}

input[type="text"], .custom-dropdown {
    width: 10rem;
}

.plus-lmargin {
    margin-left: 2rem;
}

.orange {
  background-color: orange;
}

.width100p {
    width: 100%;
}

#grid-wrapper {
    padding: 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.grid-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.grid-col label {
    margin-bottom: 1.5rem;
}

#grid-col-labels {
    text-align: right;
}

.grid-col input[type="text"] {
    margin-bottom: 1rem;
}

.custom-dropdown {
    margin-bottom: 0.5rem;
}

</style>