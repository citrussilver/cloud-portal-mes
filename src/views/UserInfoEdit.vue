<template>
    <div>
        <div class="common-container">
            <div class="header-text-container">
                <span class="underline-text">회 원 정보</span>
            </div>
            <div class="details-content">

                <div class="grid-container">
                    <div id="grid-wrapper">
                        <div class="grid-col lmargin" id="grid-col-labels">
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
                                <input type="text"><label style="white-space: nowrap; margin-left: 3rem;">HP 번호</label><input type="text" class="lmargin-1dot5">
                            </div>
                            <input type="text">
                            <input type="text" style="width: 100%;">
                        </div>
                    </div>
                <div id="grid-wrapper">
                    <div class="grid-col lmargin" id="grid-col-labels">
                        <label for="">회사코드</label>
                        <label for="">산업군</label>
                        <label for="">사업자구분</label>
                        <label for="">사업장주소</label>
                        <label for="">상세주소</label>
                    </div>
                    <div class="grid-col">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <input type="text"><label style="margin-left: 6.55rem">회사명</label><input type="text" class="lmargin-1dot5">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <select name="Icecream Flavours" class="custom-dropdown-kr">
                                <option value="opt1">전자</option>
                                <option value="opt2">전자</option>
                                <option value="opt3">전자</option>
                                <option value="opt4">전자</option>
                            </select>
                            <div>
                                <label>사업자번호</label><input type="text" class="lmargin-1dot5">
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <select name="Icecream Flavours" class="custom-dropdown-kr">
                                <option value="opt1">법인</option>
                                <option value="opt2">법인</option>
                                <option value="opt3">법인</option>
                                <option value="opt4">법인</option>
                            </select>
                            <div>
                                <label style="white-space: nowrap;">대표자명</label><input type="text" class="lmargin-1dot5">
                            </div>
                        </div>
                        <input type="text">
                        <input type="text" style="width: 100%;">
                    </div>
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

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    white-space: nowrap;
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

#grid-wrapper {
    padding: 5rem 0;
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
    width: 20rem;
}

.custom-dropdown-kr {
    position: relative;
    bottom: 0.5rem;
}

</style>