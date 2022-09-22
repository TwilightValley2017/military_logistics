<template>
    <div>
        <h3>exchange receive</h3>
        <h4>you have selected {{ selectedItem }}</h4>
        <!-- <fz-select defaultValue="lucy" style="width: 120px" @change="selectedItemChanged">
            <fz-select-option value="jack">Jack</fz-select-option>
            <fz-select-option value="lucy">Lucy</fz-select-option>
            <fz-select-option value="disabled" disabled>Disabled</fz-select-option>
            <fz-select-option value="Yiminghe">yiminghe</fz-select-option>
        </fz-select> -->
        <!-- <fz-dropdown @visibleChange="doSomething">
            <a class="ant-dropdown-link" href="#"> Hover me <fz-icon type="down" /> </a>
            <fz-menu slot="overlay">
            <fz-menu-item>
                <a href="javascript:;">1st menu item</a>
            </fz-menu-item>
            <fz-menu-item>
                <a href="javascript:;">2nd menu item</a>
            </fz-menu-item>
            <fz-menu-item>
                <a href="javascript:;">3rd menu item</a>
            </fz-menu-item>
            </fz-menu>
        </fz-dropdown> -->
        <!-- <fz-checkbox @change="checkedItem">开启DLP</fz-checkbox> -->
        <!-- <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <fz-checkbox @change="onCheckAllChange">
                Check all
            </fz-checkbox>
        </div>
        <br />
        <fz-checkbox-group :options="plainOptions" v-model="checkedList" @change="checkedItem" /> -->
        <!-- <fz-switch defaultChecked @change="switchSomething" /> -->
        <fz-list itemLayout="horizontal" :dataSource="list">
            <fz-list-item slot="renderItem" slot-scope="item">
            <fz-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
                <a slot="title" href="https://www.antdv.com/">{{item.title}}</a>
            </fz-list-item-meta>
            </fz-list-item>
        </fz-list>
        <!-- <div> -->
            <!-- <span @click="nativeEventHandler">HMTL 标签</span> -->
            <!-- <fz-button type="primary" @click.prevent="compEventHandler" @focus="printSelf">Login</fz-button>
            <svg width="100" height="100" @click.prevent="nativeEventHandler" @focus="printSelf">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            </svg> -->
        <!-- </div> -->
        <!-- <fz-form :form="form" @submit="submitSomething">
            <fz-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <fz-input
                    v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
                />
            </fz-form-item>
            <fz-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <fz-select
                    v-decorator="[
                    'gender',
                    { rules: [{ required: true, message: 'Please select your gender!' }] },
                    ]"
                    placeholder="Select a option and change input text above"
                    @change="handleSelectChange"
                >
                    <fz-select-option value="male">
                    male
                    </fz-select-option>
                    <fz-select-option value="female">
                    female
                    </fz-select-option>
                </fz-select>
            </fz-form-item>
            <fz-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <fz-button type="primary" html-type="submit">
                Submit
            </fz-button>
            </fz-form-item>
        </fz-form> -->
        <child-comp @click="compEventHandler" @focus="printSelf"></child-comp>
    </div>

</template>

<script>
import childComp from './exchange-receive-child.vue'

export default {
    name: 'exchange-receive',
    components: {
        childComp,
    },
    data() {
        return {
            selectedItem: '',
            plainOptions: ['Apple', 'Pear', 'Orange'],
            checkedList: [],
            list: [
                {
                title: 'Ant Design Title 1',
                },
                {
                title: 'Ant Design Title 2',
                },
                {
                title: 'Ant Design Title 3',
                },
                {
                title: 'Ant Design Title 4',
                },
            ],
            form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
    methods: {
        selectedItemChanged(value) {
            this.selectedItem = value
        },
        doSomething(visible) {
            this.selectedItem = visible
        },
        checkedItem(e) {
            console.warn(e.target)
            // this.selectedItem = e.target.checked
        },
        onCheckAllChange(e) {
            this.selectedItem = e.target.checked
        },
        switchSomething(checked) {
            this.selectedItem = checked
        },
        nativeEventHandler(e) {
            console.log(e.target)
        },
        compEventHandler(e) {
            console.log(e.target)
        },
        printSelf(e) {
            console.log(e.target)
        },
        submitSomething(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                }
            })
        },
    }
}
</script>