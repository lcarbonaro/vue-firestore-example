<template>
  <div id="app">
    just testing
    <List @delete-member="deleteMember" :members="members" />
    <Input @add-member="addMember"/>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Input from "./components/Input.vue";
import { db } from "./main";

export default {
    name: "app",
    components: {
        List,
        Input
    },
    data() {
        return {
            members: []
        };
    },
    firestore() {
        return {
            members: db.collection("members").orderBy('name')
        };
    },
    methods: {
        addMember(name, age) {
            //alert('in addMember Parent');
            db.collection("members").add({ name, age });
        },
        deleteMember(id) {
            //alert('in deleteMember Parent');
            db.collection("members").doc(id).delete();
        }
    }
};
</script>

<style>
</style>
