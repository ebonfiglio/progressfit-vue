<template>
  <v-container>
    <h1>How It Works</h1>
    <p>
      Setup your diet account settings @Html.ActionLink("here.",
      "DietAccountSettings", "Diet")
    </p>
    <p>
      Create your diet plan @Html.ActionLink("here.", "Index", "Diet")
    </p>
    <p>
      Enter your daily macros. (NOTE: You only <i>need </i> to enter your daily
      macros on days where you were off on your target macros.)
    </p>
    <p>
      Weigh in every seven days.
    </p>
    <h2>Setting Up Your Account</h2>
    <p>
      Fill in the required basic information and ProgressFit will calculate your
      BMR.
    </p>
    <p>Use calipers to accurately meaure your body fat.</p>
    <h2>Creating a Diet</h2>
    <h4>
      Currently ProgressFit has four different diet types that you can choose
      from.
    </h4>
    <p>
      <b>Cut</b> - Keeping the most amount of muscle while losing the most
      amount of fat.
    </p>
    <p>
      <b>Maintenance</b> - If you're not looking to gain or lose weight this is
      the option for you.
    </p>
    <p>
      <b>Lean Bulk</b> - Adding the most muscle possbile with as little of fat
      as possbile.
    </p>
    <p>
      <b>Max Bulk</b> - Adding the most amount of muscle possible. You will most
      likely gain a small amount of fat with this diet type.
    </p>
  </v-container>
</template>

<script>
export default { name: "HowItWorks" };
</script>

<style></style>
