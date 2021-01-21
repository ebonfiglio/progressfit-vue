<template>
  <div class="home">
    <v-container>
      <v-card color="#385F73" dark class="grow">
        <v-card-title class="headline">ProgressFit</v-card-title>

        <v-card-subtitle>
          ProgressFit is a free online fitness tracker that will help you reach
          your goals faster!</v-card-subtitle
        >

        <v-card-actions>
          <v-btn text>Learn more</v-btn>
        </v-card-actions>
      </v-card>
      <v-row>
        <v-col>
          <v-card color="#1F7087" dark class="grow">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"
                  >Macro and Diet Calculator</v-card-title
                >

                <v-card-subtitle>
                  ProgressFit gives you an accurate macro and diet calculator
                  that adjusts based on how you are
                  progressing.</v-card-subtitle
                >
              </div>
            </div>
          </v-card>
          <h2></h2>
          <p></p>
        </v-col>
        <v-col>
          <v-card color="#1F7087" dark class="grow">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"
                  >Workout Tracker and Builder</v-card-title
                >

                <v-card-subtitle>
                  Track your progress in the weight room with the Workout
                  tracker. Customize your routine and monitor your
                  progress.</v-card-subtitle
                >
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card color="#1F7087" dark class="grow">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"
                  >Free Statistics and Data</v-card-title
                >
                <v-card-subtitle>
                  ProgressFit offers free statistics about your diet and workout
                  progress.</v-card-subtitle
                >
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  min-height: 100%;
  background: rgb(0, 255, 250);
  background: linear-gradient(
    45deg,
    rgba(0, 255, 250, 1) 0%,
    rgba(55, 166, 137, 1) 100%
  );
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.01);
}
</style>
