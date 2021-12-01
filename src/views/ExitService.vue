<template>
    <div>
        <div class="common-container">
            <div class="header-text-container">
                <span class="underline-text">서비스 탈퇴</span>
            </div>
            <div class="details-content plus-padding">
                <div id="write-up">
                    <p>사용중인  클라우드 MES 서비스 탈퇴를 하려면</p>
                    <p>먼저 KT 와의 정산 완료 후 탈퇴 진행 됩니다</p>
                    <p>진행 담당 부서로 연락 하시기 바랍니다.</p>
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


.plus-padding {
    padding: 3rem 3rem;
}

#write-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#write-up p {
    font-size: 3.5rem;
    margin-bottom: 4rem;
}

</style>