<template>
<div >
    <input v-model="name" placeholder="Member name" />
    <input v-model="age" placeholder="Member age" />
    <button v-on:click="addMemberComp(name,age)" >Add New Member</button>
</div>
    
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            name: null,
            age: null
        };
    },
    methods: {
        addMemberComp(n,a) {
            this.$emit('add-member', n, a);
            this.name = null;
            this.age = null;
        }
    }
};
</script>

<style scoped>
div {
    margin-top: 20px;
}
</style>
