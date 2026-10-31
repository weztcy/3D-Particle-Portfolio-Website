export const RAG_SANDBOX_SCENARIOS = [
  {
    id: "fin-risk",
    label: "Q3 Macro Liquidity & Fraud Anomaly Audit",
    query:
      "Analyze Q3 cross-border liquidity anomalies and correlate with Graph-GNN fraud rings across SEA corridors.",
    intent: "MULTI_HOP_GRAPH_ANALYTICS",
    latencyMs: 36,
    tokensPerSec: 148,
    faithfulness: 99.6,
    retrievedChunks: [
      {
        source: "ClickHouse // telemetry_fraud_rings_2026Q3.parquet",
        score: 0.984,
        snippet:
          "Cluster #14 exhibits cyclic sub-second velocity across 38 synthetic merchant nodes; GATv2 edge attention weight = 0.94.",
      },
      {
        source: "Qdrant // risk_policy_v4_embeddings (Chunk #8821)",
        score: 0.951,
        snippet:
          "Automated circuit-breaker rule CB-09 triggers step-up biometric verification when graph centrality exceeds 3.2 sigma.",
      },
      {
        source: "Neo4j // EntitySubgraph (2-Hop Traversal)",
        score: 0.928,
        snippet:
          "(Wallet_Cluster_A)-[:SETTLED_VIA {latency_ms: 110}]->(Corridor_SG_JKT)-[:FLAGGED_BY]->(Model_Chronos_v3)",
      },
    ],
    synthesizedAnswer:
      "Based on ClickHouse telemetry fusion and Neo4j entity subgraph traversal, Q3 liquidity anomalies are concentrated along the SG–JKT Corridor (Cluster #14). The ChronosNet GATv2 model detects cyclic money-mule velocity across 38 merchant nodes with a 0.984 confidence score. Activating rule CB-09 automatically slashes risk exposure by 94.2% with zero friction on organic transactions.",
  },
  {
    id: "mlops-drift",
    label: "Production Vision Transformer Drift Diagnostics",
    query:
      "Diagnose latency spike and feature drift on Edge Line-04 Vision Transformer and recommend quantization rollback.",
    intent: "SYSTEM_DIAGNOSTIC_TELEMETRY",
    latencyMs: 31,
    tokensPerSec: 162,
    faithfulness: 99.2,
    retrievedChunks: [
      {
        source: "Prometheus // triton_inference_metrics_line04",
        score: 0.979,
        snippet:
          "Ambient lighting temperature shift (+650K) increased patch embedding KL-divergence from 0.03 to 0.19 at 14:20 UTC.",
      },
      {
        source: "MLflow // Registry Model sentinel_vit_int8_v12",
        score: 0.946,
        snippet:
          "Dynamic histogram calibration enabled in v12.2 restores mAP@50 to 99.61% under high-lux spectral variance.",
      },
      {
        source: "Qdrant // runbook_edge_tensorrt.md",
        score: 0.912,
        snippet:
          "Execute zero-downtime weight hot-swap via Triton Model Control API with calibration profile 'spectral_adaptive_int8'.",
      },
    ],
    synthesizedAnswer:
      "Distribution drift detected on Edge Line-04 due to ambient lighting color temperature shifts (+650K), increasing patch embedding KL-divergence to 0.19. Recommended protocol: perform zero-downtime weight hot-swap to 'sentinel_vit_int8_v12.2' using the 'spectral_adaptive_int8' calibration profile to restore mAP@50 to 99.61% within <15 seconds.",
  },
  {
    id: "causal-bi",
    label: "Causal Attribution of Personalization Engine",
    query:
      "What is the true incremental LTV uplift (CATE) of the neural recommendation engine after controlling for seasonal bias?",
    intent: "CAUSAL_INFERENCE_SQL",
    latencyMs: 41,
    tokensPerSec: 139,
    faithfulness: 99.5,
    retrievedChunks: [
      {
        source: "DuckDB // causal_uplift_experiment_exp409.sql",
        score: 0.988,
        snippet:
          "Doubly-Robust estimator across N=1.42M users yields +24.8% net LTV uplift (95% CI: [+22.1%, +27.4%], p < 0.0001).",
      },
      {
        source: "Polaris BI // Cohort Retention Matrix Day-90",
        score: 0.957,
        snippet:
          "High-intent power users show +31.4% repeat session frequency; cold-start users gain +18.2% activation via hybrid embeddings.",
      },
      {
        source: "Qdrant // executive_memo_personalization_roi.pdf",
        score: 0.921,
        snippet:
          "Net annualized incremental revenue attributed strictly to neural ranking model (net of promo spend) equals $3.42M.",
      },
    ],
    synthesizedAnswer:
      "After controlling for seasonal bias using a Doubly-Robust Causal Estimator across 1.42M users, the neural recommendation engine drove a net causal LTV uplift of +24.8% (95% CI: [+22.1%, +27.4%]). Key incremental drivers include new user activation (+18.2%) and repeat session velocity (+31.4%), yielding a verified annualized revenue impact of $3.42M.",
  },
];
