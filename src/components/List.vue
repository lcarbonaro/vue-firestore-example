<template>
    <div>
        <article v-for="m in members" :key="m.id">
            <button @click="$emit('delete-member',m.id)">Del</button>
            {{m.name}} is {{m.age}} year(s) old.
        </article>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        members: Array
    }
};
</script>

<style>
</style>
