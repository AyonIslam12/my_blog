<header class="clearfix">
    <div class="header-top-area bb hidden-xs">

    <div class="header-middle-area ptb-25">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-12 col-12">
 @include('ecommerce.partials.headerLogo')
                </div>
                <div class="col-xl-9 col-lg-9 d-none d-lg-block">
                    <div class="home3-mainmenu mainmenu mt-12 home3-hover dropdown text-right">
@include('ecommerce.partials.headerNav')
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mobail-menu-area home3-bg">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-md-6 d-block d-lg-none">
                    <div class="mobail-menu-active">
@include('ecommerce.partials.headerNav')
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
