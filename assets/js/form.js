// Placeholder for dropdowns
const $placeholder = $("select[placeholder]");
if ($placeholder.length) {
  $placeholder.each(function () {
    const $this = $(this);

    // Initial
    $this.addClass("placeholder-shown");
    const placeholder = $this.attr("placeholder");
    $this.prepend(`<option value="" selected>${placeholder}</option>`);

    // Change
    $this.on("change", (event) => {
      const $this = $(event.currentTarget);
      if ($this.val()) {
        $this.removeClass("placeholder-shown").addClass("placeholder-hidden");
      } else {
        $this.addClass("placeholder-shown").removeClass("placeholder-hidden");
      }
    });
  });
}
