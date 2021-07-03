@extends('ecommerce.master')

@section('title')
Blog-Home
@stop

@section('content')

<div class="row" style="margin: 5px 0px;" id="app">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <blog-list></blog-list>
            </div>
        </div>
    </div>
</div>

@stop
