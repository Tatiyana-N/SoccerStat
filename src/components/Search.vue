<template>

<div class="search-container">
    <div class="container flex-center">
                <form class="form-search flex-center">
                    <div class="search-label">
                        <input type="search" class="search-input" name="search">

                        <button class="search-submit" type="submit">
                            <svg width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0995 16.1287L19.7849 18.8127C19.9101 18.9424 19.9794 19.1161 19.9778 19.2963C19.9763 19.4766 19.904 19.649 19.7765 19.7765C19.649 19.904 19.4766 19.9763 19.2963 19.9778C19.1161 19.9794 18.9424 19.9101 18.8127 19.7849L16.1274 17.0995C14.3725 18.603 12.1036 19.3683 9.79661 19.235C7.48964 19.1016 5.32399 18.0799 3.75408 16.3843C2.18418 14.6886 1.33206 12.4508 1.37654 10.1404C1.42101 7.82998 2.35862 5.62661 3.99261 3.99261C5.62661 2.35862 7.82998 1.42101 10.1404 1.37654C12.4508 1.33206 14.6886 2.18418 16.3843 3.75408C18.0799 5.32399 19.1016 7.48964 19.235 9.79661C19.3683 12.1036 18.603 14.3725 17.0995 16.1274V16.1287ZM10.3125 17.875C12.3182 17.875 14.2417 17.0782 15.66 15.66C17.0782 14.2417 17.875 12.3182 17.875 10.3125C17.875 8.30679 17.0782 6.38324 15.66 4.96499C14.2417 3.54675 12.3182 2.74999 10.3125 2.74999C8.30679 2.74999 6.38324 3.54675 4.96499 4.96499C3.54675 6.38324 2.74999 8.30679 2.74999 10.3125C2.74999 12.3182 3.54675 14.2417 4.96499 15.66C6.38324 17.0782 8.30679 17.875 10.3125 17.875Z"
                                    fill="#212121" />
                            </svg>

                        </button>
                    </div>

            
                </form>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.form-search {
    width: 100%;
    max-width: 850px;
}

.search-label {
    width: 100%;
    max-width: 500px;
    height: 44px;
    position: relative;
}

.search-input {
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 22px;
    padding-left: 20px;
    padding-right: 35px;
}

.search-submit {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    width: 22px;
    height: 22px;
}

.search-container {
    margin-bottom: 20px; /*  отступ снизу для разделения с карточками */
}

</style>