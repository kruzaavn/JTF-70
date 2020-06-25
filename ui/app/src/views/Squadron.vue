<template>
    <v-container fluid>
        <v-row align-content="start">
            <v-col>
            <v-card
                    class="py-4"
                    tile
            >
                <v-img
                    :src="squadron.img"
                    contain
                    height="500"
                >
                    <v-card-title>{{squadronDesignation}}</v-card-title>
                </v-img>

            <v-card
                    class="mx-4 my-5 py-2" v-for="member in members"
                    :key="member.id"
                    tile
            >
                <v-row>
                    <v-col
                            cols="2
"
                    >
                <v-img
                        max-height="150"
                        contain
                        :src="'https://www.army.mil/e2/images/rv7/ranks/badges/officer/sm/' + ranks[member.rank_code] + '.svg'"
                >
                </v-img>
                        </v-col>
                    <v-col>
                <v-card-title>
                    {{member.rank}} {{member.callsign}} {{member.position}}
                </v-card-title>
                <v-card-subtitle>On board since {{member.date_joined}} <br> Status: {{member.status}} </v-card-subtitle>
                        </v-col>
                </v-row>
                <v-card-text>
                    <v-row>
                    <v-col>
                        Air Frame: {{member.squadron.air_frame.name | upper}} - 50 hrs
                    </v-col>
                    <v-col>
                        Kills: Mig-29 - 2
                    </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
            </v-card>
                        </v-col>
        </v-row>

    </v-container>
</template>


<script>

    import {mapGetters} from 'vuex'
    export default {
        name: 'Squadron',
        props: ['squadronDesignation'],
        data: () => ({
            ranks: {
        1:'first_lieutenant',
        2: 'second_lieutenant',
        3: 'captain',
        4: 'major',
        5: 'lieutenant_colonel',
        6: 'colonel'}
        }),
        computed: {
            ...mapGetters(['roster', 'squadrons']),
            members:  function (){
                return this.roster.filter(pilot => pilot.squadron.designation === this.squadronDesignation)
            },
            squadron: function () {
                return this.squadrons.filter(sqd => sqd.designation === this.squadronDesignation)[0]
            }
        },
        filters: {
            upper: function(value) {
                return value.toUpperCase()
            }
        }

    }
</script>

<style>


</style>