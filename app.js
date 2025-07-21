/* JavaScript for HealthKart Influencer Marketing Dashboard */

// Application data (embedded from JSON)
const appData = {
  executive_summary: {
    total_revenue: 45200000,
    total_investment: 12800000,
    overall_roas: 3.53,
    incremental_roas: 2.85,
    active_campaigns: 18,
    total_influencers: 247,
    total_orders: 8945,
    average_order_value: 5053,
    customer_acquisition_cost: 1431,
    lifetime_value: 12400,
    brand_lift: 23.5,
    share_of_voice: 18.7,
  },
  campaigns: [
    {
      campaign_id: "CAMP_001",
      name: "Summer Fitness Revolution 2024",
      brand: "MuscleBlaze",
      status: "Active",
      start_date: "2024-04-01",
      end_date: "2024-08-31",
      budget: 5000000,
      spent: 3750000,
      revenue: 18750000,
      orders: 3200,
      roas: 5.0,
      incremental_roas: 4.1,
      influencer_count: 65,
      content_pieces: 245,
      total_reach: 12500000,
      total_engagement: 875000,
      conversion_rate: 2.56,
      cpm: 300,
      cpc: 12,
      cpa: 1171,
    },
    {
      campaign_id: "CAMP_002",
      name: "Women's Wellness Journey",
      brand: "HKVitals",
      status: "Active",
      start_date: "2024-03-15",
      end_date: "2024-09-15",
      budget: 3500000,
      spent: 2800000,
      revenue: 11200000,
      orders: 2800,
      roas: 4.0,
      incremental_roas: 3.2,
      influencer_count: 48,
      content_pieces: 186,
      total_reach: 8500000,
      total_engagement: 595000,
      conversion_rate: 3.29,
      cpm: 329,
      cpc: 15,
      cpa: 1000,
    },
    {
      campaign_id: "CAMP_003",
      name: "Smart Kids Nutrition",
      brand: "Gritzo",
      status: "Completed",
      start_date: "2024-05-01",
      end_date: "2024-07-31",
      budget: 2200000,
      spent: 2200000,
      revenue: 8800000,
      orders: 1950,
      roas: 4.0,
      incremental_roas: 3.4,
      influencer_count: 35,
      content_pieces: 128,
      total_reach: 5200000,
      total_engagement: 416000,
      conversion_rate: 3.75,
      cpm: 423,
      cpc: 18,
      cpa: 1128,
    },
  ],
  top_influencers: [
    {
      influencer_id: "INF_001",
      name: "Fitness Guru Sahil",
      platform: "Instagram",
      follower_count: 1250000,
      category: "Fitness",
      engagement_rate: 4.2,
      avg_views: 185000,
      total_revenue_generated: 2500000,
      total_orders: 425,
      roas: 6.8,
      content_pieces: 28,
      brand_safety_score: 9.2,
      audience_quality: 8.8,
      collaboration_score: 9.5,
      location: "Mumbai",
      tier: "Macro",
    },
    {
      influencer_id: "INF_002",
      name: "Wellness Queen Kavya",
      platform: "YouTube",
      follower_count: 890000,
      category: "Wellness",
      engagement_rate: 3.8,
      avg_views: 125000,
      total_revenue_generated: 1800000,
      total_orders: 290,
      roas: 5.4,
      content_pieces: 22,
      brand_safety_score: 9.8,
      audience_quality: 9.1,
      collaboration_score: 9.2,
      location: "Bangalore",
      tier: "Macro",
    },
    {
      influencer_id: "INF_003",
      name: "Sports Nutrition Expert",
      platform: "Instagram",
      follower_count: 675000,
      category: "Sports Nutrition",
      engagement_rate: 5.1,
      avg_views: 95000,
      total_revenue_generated: 1650000,
      total_orders: 312,
      roas: 7.2,
      content_pieces: 24,
      brand_safety_score: 9.4,
      audience_quality: 8.9,
      collaboration_score: 9.0,
      location: "Delhi",
      tier: "Macro",
    },
  ],
  platform_performance: [
    {
      platform: "Instagram",
      spend: 5200000,
      revenue: 20800000,
      roas: 4.0,
      influencers: 98,
      content_pieces: 387,
      total_reach: 15200000,
      engagement_rate: 3.4,
      conversion_rate: 2.8,
    },
    {
      platform: "YouTube",
      spend: 3800000,
      revenue: 15200000,
      roas: 4.0,
      influencers: 52,
      content_pieces: 156,
      total_reach: 8900000,
      engagement_rate: 2.1,
      conversion_rate: 3.5,
    },
    {
      platform: "Twitter",
      spend: 2400000,
      revenue: 7200000,
      roas: 3.0,
      influencers: 67,
      content_pieces: 245,
      total_reach: 5800000,
      engagement_rate: 1.8,
      conversion_rate: 1.9,
    },
    {
      platform: "Facebook",
      spend: 1400000,
      revenue: 2000000,
      roas: 1.4,
      influencers: 30,
      content_pieces: 89,
      total_reach: 2100000,
      engagement_rate: 1.2,
      conversion_rate: 1.1,
    },
  ],
  attribution_data: [
    { touchpoint: "First Touch", revenue: 12600000, percentage: 27.9 },
    { touchpoint: "Mid Touch", revenue: 15800000, percentage: 34.9 },
    { touchpoint: "Last Touch", revenue: 16800000, percentage: 37.2 },
  ],
  monthly_performance: [
    { month: "Jan 2024", revenue: 2800000, spend: 950000, roas: 2.95, orders: 580 },
    { month: "Feb 2024", revenue: 3200000, spend: 1080000, roas: 2.96, orders: 665 },
    { month: "Mar 2024", revenue: 4100000, spend: 1200000, roas: 3.42, orders: 815 },
    { month: "Apr 2024", revenue: 5800000, spend: 1400000, roas: 4.14, orders: 1150 },
    { month: "May 2024", revenue: 7200000, spend: 1650000, roas: 4.36, orders: 1425 },
    { month: "Jun 2024", revenue: 8500000, spend: 1850000, roas: 4.59, orders: 1680 },
    { month: "Jul 2024", revenue: 7800000, spend: 1920000, roas: 4.06, orders: 1545 },
    { month: "Aug 2024", revenue: 5800000, spend: 1750000, roas: 3.31, orders: 1085 },
  ],
  payouts: [
    {
      influencer_id: "INF_001",
      influencer_name: "Fitness Guru Sahil",
      total_earned: 375000,
      pending_payment: 125000,
      paid_amount: 250000,
      campaigns: 8,
      avg_payout_per_post: 15000,
      payment_basis: "Mixed",
    },
    {
      influencer_id: "INF_002",
      influencer_name: "Wellness Queen Kavya",
      total_earned: 285000,
      pending_payment: 85000,
      paid_amount: 200000,
      campaigns: 6,
      avg_payout_per_post: 18000,
      payment_basis: "Per Order",
    },
  ],
};

/** Utility to format numbers with commas */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Sidebar Navigation Logic */
function initSidebarNavigation() {
  const sidebar = document.querySelector(".sidebar__nav");
  const sections = document.querySelectorAll(".dashboard-section");

  // Delegated event listener for robustness
  sidebar.addEventListener("click", (e) => {
    const item = e.target.closest(".sidebar__item");
    if (!item) return; // Click outside an item

    // Remove active class from existing
    const currentActive = document.querySelector(".sidebar__item--active");
    currentActive?.classList.remove("sidebar__item--active");

    // Set active class on clicked
    item.classList.add("sidebar__item--active");

    // Show corresponding section
    const targetSectionId = item.getAttribute("data-section");
    sections.forEach((section) => {
      if (section.id === targetSectionId) {
        section.classList.add("dashboard-section--active");
        // Scroll to top of main content for better UX (optional)
        document.querySelector(".main-content").scrollTop = 0;
      } else {
        section.classList.remove("dashboard-section--active");
      }
    });
  });
}

/** Populate Campaign Table */
function populateCampaignTable() {
  const tbody = document.getElementById("campaignTableBody");
  tbody.innerHTML = ""; // Clear for idempotency
  appData.campaigns.forEach((camp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${camp.name}</td>
      <td>${camp.brand}</td>
      <td>₹${formatNumber(camp.budget)}</td>
      <td>₹${formatNumber(camp.spent)}</td>
      <td>₹${formatNumber(camp.revenue)}</td>
      <td>${camp.roas.toFixed(2)}x</td>
      <td><span class="status-badge ${camp.status === "Active" ? "status-badge--active" : "status-badge--completed"}">${camp.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

/** Populate Payout Table */
function populatePayoutTable() {
  const tbody = document.getElementById("payoutTableBody");
  tbody.innerHTML = "";
  appData.payouts.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.influencer_name}</td>
      <td>₹${formatNumber(p.total_earned)}</td>
      <td>₹${formatNumber(p.pending_payment)}</td>
      <td>₹${formatNumber(p.paid_amount)}</td>
      <td>${p.campaigns}</td>
      <td>${p.payment_basis}</td>
      <td><button class="btn btn--sm btn--primary">Pay Now</button></td>
    `;
    tbody.appendChild(tr);
  });
}

/** Charts Initialization */
function initCharts() {
  initRevenueChart();
  initRoasChart();
  initAttributionChart();
  initPerformanceChart();
  initPlatformChart();
  initRoiChart();
  initCostChart();
}

const chartColors = [
  "#1FB8CD",
  "#FFC185",
  "#B4413C",
  "#ECEBD5",
  "#5D878F",
  "#DB4545",
  "#D2BA4C",
  "#964325",
  "#944454",
  "#13343B",
];

/** Revenue Trend Chart */
function initRevenueChart() {
  const ctx = document.getElementById("revenueChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: appData.monthly_performance.map((m) => m.month),
      datasets: [
        {
          label: "Revenue (₹)",
          data: appData.monthly_performance.map((m) => m.revenue),
          borderColor: chartColors[0],
          backgroundColor: "rgba(31, 184, 205, 0.25)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Spend (₹)",
          data: appData.monthly_performance.map((m) => m.spend),
          borderColor: chartColors[1],
          backgroundColor: "rgba(255,193,133,0.25)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ₹${formatNumber(ctx.parsed.y)}`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (val) => "₹" + formatNumber(val),
          },
        },
      },
    },
  });
}

/** ROAS by Campaign Chart */
function initRoasChart() {
  const ctx = document.getElementById("roasChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: appData.campaigns.map((c) => c.name),
      datasets: [
        {
          label: "ROAS (x)",
          data: appData.campaigns.map((c) => c.roas),
          backgroundColor: chartColors.slice(0, appData.campaigns.length),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ctx.parsed.y.toFixed(2) + "x",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

/** Attribution Chart */
function initAttributionChart() {
  const ctx = document.getElementById("attributionChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: appData.attribution_data.map((a) => a.touchpoint),
      datasets: [
        {
          data: appData.attribution_data.map((a) => a.percentage),
          backgroundColor: chartColors.slice(0, appData.attribution_data.length),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
          },
        },
      },
    },
  });
}

/** Campaign Revenue vs Spend Chart */
function initPerformanceChart() {
  const ctx = document.getElementById("performanceChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: appData.campaigns.map((c) => c.name),
      datasets: [
        {
          label: "Revenue",
          data: appData.campaigns.map((c) => c.revenue),
          backgroundColor: chartColors[0],
        },
        {
          label: "Spent",
          data: appData.campaigns.map((c) => c.spent),
          backgroundColor: chartColors[1],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/** Platform Comparison Chart */
function initPlatformChart() {
  const ctx = document.getElementById("platformChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: appData.platform_performance.map((p) => p.platform),
      datasets: [
        {
          label: "Revenue",
          data: appData.platform_performance.map((p) => p.revenue),
          backgroundColor: chartColors[0],
        },
        {
          label: "Spend",
          data: appData.platform_performance.map((p) => p.spend),
          backgroundColor: chartColors[1],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/** ROI Breakdown (placeholder data) */
function initRoiChart() {
  const ctx = document.getElementById("roiChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Influencer Fees", "Paid Media", "Production", "Tools"],
      datasets: [
        {
          data: [50, 30, 15, 5],
          backgroundColor: chartColors.slice(0, 4),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

/** Cost Structure (placeholder data) */
function initCostChart() {
  const ctx = document.getElementById("costChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Instagram", "YouTube", "Twitter", "Facebook"],
      datasets: [
        {
          label: "CPM",
          data: [300, 329, 423, 210],
          backgroundColor: chartColors[2],
        },
        {
          label: "CPC",
          data: [12, 15, 18, 9],
          backgroundColor: chartColors[3],
        },
        {
          label: "CPA",
          data: [1171, 1000, 1128, 1450],
          backgroundColor: chartColors[4],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/** Initialize Dashboard */
function initDashboard() {
  populateCampaignTable();
  populatePayoutTable();
  initCharts();
  initSidebarNavigation();
}

document.addEventListener("DOMContentLoaded", initDashboard);
