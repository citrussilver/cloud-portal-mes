<template>
    <div>
        <section class="section-padding">
            <div class="common-container">
            <div class="b-margin"></div>
            <p>개인정보 수집 및 이용 수칙</p>
            <div class="details-content p-padding">
                <div>
                    <p>본 회원가입 폐이지를 통해 제출하는 개인정보는 ㈜지엘티코리아(이하 서비스 제공 회사)가 직접 관리하며, 서비스를  이용하기 위해서는 아래 개인정보 제공등에
                    관해 반드시 동의 하셔야 합니다.</p>
                </div>
            </div>
            <div class="b-margin"></div>
            <div class="checkbox-kr">
                <input type="checkbox" id="agree" name="agree" value="agree">
                <p class="s-l-spacing">개인정보 수집 및 이용 수칙에 동의합니다</p><br>
            </div>
            <div class="b-margin"></div>
            <p>개인,민감정보 수집 및 이용 동의</p>
            <div class="details-content p-padding">
                <div>
                    <p>본 회원가입 폐이지를 통해 제출하는 개인정보는 ㈜지엘티코리아(이하 서비스 제공 회사)가 직접 관리하며, 서비스를  이용하기 위해서는 아래 개인정보 제공등에
                    관해 반드시 동의 하셔야 합니다.</p>
                </div>
            </div>
            <div class="b-margin"></div>
            <div class="checkbox-kr">
                <input type="checkbox" id="agree" name="agree" value="agree">
                <p class="s-l-spacing">개인정보 수집 및 이용 수칙에 동의합니다</p><br>
            </div>
            <div class="b-margin"></div>
            <div class="details-content">
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
                        <!-- textbox of 회원 ID -->
                        <div>
                            <input type="text"><button style="margin-left: 1rem; background-color: red; color: #fff; border-radius: 5px;">중복체크</button>
                        </div>
                        <div class="second-elem-row-item">
                            <input type="text"><label class="l-margin">회원명</label><input type="text">
                        </div>
                        <div class="second-elem-row-item">
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
                        <div class="second-elem-row-item">
                            <input type="text"><label style="margin-left: 6.55rem">회사명</label><input type="text">
                        </div>
                        <div class="second-elem-row-item">
                            <select name="Icecream Flavours" class="custom-dropdown-kr">
                                <option value="opt1">전자</option>
                                <option value="opt2">전자</option>
                                <option value="opt3">전자</option>
                                <option value="opt4">전자</option>
                            </select>
                            <label class="l-margin">사업자번호</label><input type="text">
                        </div>
                        <div class="second-elem-row-item">
                            <select name="Icecream Flavours" class="custom-dropdown-kr">
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
            <div class="b-margin"></div>
            <div class="buttons-wrapper">
                <button class="common-button">가입하기</button>
                <button class="common-button l-margin">닫기</button>
            </div>
        </div>
        </section>
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

.custom-dropdown-kr {
    position: relative;
    bottom: 0.5rem;
}

.checkbox-kr {
    display: flex;
}

.second-elem-row-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.l-margin {
    margin-left: 3rem;   
}

</style>