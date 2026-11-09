# Backup Data: Lab & RAG Sandbox Scenarios

> **Source:** `src/data/lab/ragScenariosData.ts`  
> **Exported Collection:** `RAG_SANDBOX_SCENARIOS` (3 scenarios)  
> **Generated:** `2026-11-09T09:33:19.065Z`

---

## Master Scenarios Summary

| ID | Label | Intent | Latency | Speed | Faithfulness |
| :--- | :--- | :--- | :---: | :---: | :---: |
| `fin-risk` | **Q3 Macro Liquidity & Fraud Anomaly Audit** | `MULTI_HOP_GRAPH_ANALYTICS` | `36ms` | `148 tok/s` | `99.6%` |
| `mlops-drift` | **Production Vision Transformer Drift Diagnostics** | `SYSTEM_DIAGNOSTIC_TELEMETRY` | `31ms` | `162 tok/s` | `99.2%` |
| `causal-bi` | **Causal Attribution of Personalization Engine** | `CAUSAL_INFERENCE_SQL` | `41ms` | `139 tok/s` | `99.5%` |

---

## Detailed Scenario Benchmarks


### Scenario 1: Q3 Macro Liquidity & Fraud Anomaly Audit

- **ID:** `fin-risk`
- **Label:** **Q3 Macro Liquidity & Fraud Anomaly Audit**
- **Query / Prompt:** "Analyze Q3 cross-border liquidity anomalies and correlate with Graph-GNN fraud rings across SEA corridors."
- **Intent Classifier:** `MULTI_HOP_GRAPH_ANALYTICS`
- **Telemetry Benchmarks:**
  - **Latency:** `36 ms`
  - **Inference Speed:** `148 tokens/sec`
  - **Faithfulness Score:** `99.6%`

#### Retrieved Chunks

##### Chunk #1 (Score: `0.984`)
- **Source:** `ClickHouse // telemetry_fraud_rings_2026Q3.parquet`
- **Snippet:**
> Cluster #14 exhibits cyclic sub-second velocity across 38 synthetic merchant nodes; GATv2 edge attention weight = 0.94.


##### Chunk #2 (Score: `0.951`)
- **Source:** `Qdrant // risk_policy_v4_embeddings (Chunk #8821)`
- **Snippet:**
> Automated circuit-breaker rule CB-09 triggers step-up biometric verification when graph centrality exceeds 3.2 sigma.


##### Chunk #3 (Score: `0.928`)
- **Source:** `Neo4j // EntitySubgraph (2-Hop Traversal)`
- **Snippet:**
> (Wallet_Cluster_A)-[:SETTLED_VIA {latency_ms: 110}]->(Corridor_SG_JKT)-[:FLAGGED_BY]->(Model_Chronos_v3)


#### Synthesized Answer
> Based on ClickHouse telemetry fusion and Neo4j entity subgraph traversal, Q3 liquidity anomalies are concentrated along the SG–JKT Corridor (Cluster #14). The ChronosNet GATv2 model detects cyclic money-mule velocity across 38 merchant nodes with a 0.984 confidence score. Activating rule CB-09 automatically slashes risk exposure by 94.2% with zero friction on organic transactions.

---

### Scenario 2: Production Vision Transformer Drift Diagnostics

- **ID:** `mlops-drift`
- **Label:** **Production Vision Transformer Drift Diagnostics**
- **Query / Prompt:** "Diagnose latency spike and feature drift on Edge Line-04 Vision Transformer and recommend quantization rollback."
- **Intent Classifier:** `SYSTEM_DIAGNOSTIC_TELEMETRY`
- **Telemetry Benchmarks:**
  - **Latency:** `31 ms`
  - **Inference Speed:** `162 tokens/sec`
  - **Faithfulness Score:** `99.2%`

#### Retrieved Chunks

##### Chunk #1 (Score: `0.979`)
- **Source:** `Prometheus // triton_inference_metrics_line04`
- **Snippet:**
> Ambient lighting temperature shift (+650K) increased patch embedding KL-divergence from 0.03 to 0.19 at 14:20 UTC.


##### Chunk #2 (Score: `0.946`)
- **Source:** `MLflow // Registry Model sentinel_vit_int8_v12`
- **Snippet:**
> Dynamic histogram calibration enabled in v12.2 restores mAP@50 to 99.61% under high-lux spectral variance.


##### Chunk #3 (Score: `0.912`)
- **Source:** `Qdrant // runbook_edge_tensorrt.md`
- **Snippet:**
> Execute zero-downtime weight hot-swap via Triton Model Control API with calibration profile 'spectral_adaptive_int8'.


#### Synthesized Answer
> Distribution drift detected on Edge Line-04 due to ambient lighting color temperature shifts (+650K), increasing patch embedding KL-divergence to 0.19. Recommended protocol: perform zero-downtime weight hot-swap to 'sentinel_vit_int8_v12.2' using the 'spectral_adaptive_int8' calibration profile to restore mAP@50 to 99.61% within <15 seconds.

---

### Scenario 3: Causal Attribution of Personalization Engine

- **ID:** `causal-bi`
- **Label:** **Causal Attribution of Personalization Engine**
- **Query / Prompt:** "What is the true incremental LTV uplift (CATE) of the neural recommendation engine after controlling for seasonal bias?"
- **Intent Classifier:** `CAUSAL_INFERENCE_SQL`
- **Telemetry Benchmarks:**
  - **Latency:** `41 ms`
  - **Inference Speed:** `139 tokens/sec`
  - **Faithfulness Score:** `99.5%`

#### Retrieved Chunks

##### Chunk #1 (Score: `0.988`)
- **Source:** `DuckDB // causal_uplift_experiment_exp409.sql`
- **Snippet:**
> Doubly-Robust estimator across N=1.42M users yields +24.8% net LTV uplift (95% CI: [+22.1%, +27.4%], p < 0.0001).


##### Chunk #2 (Score: `0.957`)
- **Source:** `Polaris BI // Cohort Retention Matrix Day-90`
- **Snippet:**
> High-intent power users show +31.4% repeat session frequency; cold-start users gain +18.2% activation via hybrid embeddings.


##### Chunk #3 (Score: `0.921`)
- **Source:** `Qdrant // executive_memo_personalization_roi.pdf`
- **Snippet:**
> Net annualized incremental revenue attributed strictly to neural ranking model (net of promo spend) equals $3.42M.


#### Synthesized Answer
> After controlling for seasonal bias using a Doubly-Robust Causal Estimator across 1.42M users, the neural recommendation engine drove a net causal LTV uplift of +24.8% (95% CI: [+22.1%, +27.4%]). Key incremental drivers include new user activation (+18.2%) and repeat session velocity (+31.4%), yielding a verified annualized revenue impact of $3.42M.


---

## Raw JSON Data

```json
[
  {
    "id": "fin-risk",
    "label": "Q3 Macro Liquidity & Fraud Anomaly Audit",
    "query": "Analyze Q3 cross-border liquidity anomalies and correlate with Graph-GNN fraud rings across SEA corridors.",
    "intent": "MULTI_HOP_GRAPH_ANALYTICS",
    "latencyMs": 36,
    "tokensPerSec": 148,
    "faithfulness": 99.6,
    "retrievedChunks": [
      {
        "source": "ClickHouse // telemetry_fraud_rings_2026Q3.parquet",
        "score": 0.984,
        "snippet": "Cluster #14 exhibits cyclic sub-second velocity across 38 synthetic merchant nodes; GATv2 edge attention weight = 0.94."
      },
      {
        "source": "Qdrant // risk_policy_v4_embeddings (Chunk #8821)",
        "score": 0.951,
        "snippet": "Automated circuit-breaker rule CB-09 triggers step-up biometric verification when graph centrality exceeds 3.2 sigma."
      },
      {
        "source": "Neo4j // EntitySubgraph (2-Hop Traversal)",
        "score": 0.928,
        "snippet": "(Wallet_Cluster_A)-[:SETTLED_VIA {latency_ms: 110}]->(Corridor_SG_JKT)-[:FLAGGED_BY]->(Model_Chronos_v3)"
      }
    ],
    "synthesizedAnswer": "Based on ClickHouse telemetry fusion and Neo4j entity subgraph traversal, Q3 liquidity anomalies are concentrated along the SG–JKT Corridor (Cluster #14). The ChronosNet GATv2 model detects cyclic money-mule velocity across 38 merchant nodes with a 0.984 confidence score. Activating rule CB-09 automatically slashes risk exposure by 94.2% with zero friction on organic transactions."
  },
  {
    "id": "mlops-drift",
    "label": "Production Vision Transformer Drift Diagnostics",
    "query": "Diagnose latency spike and feature drift on Edge Line-04 Vision Transformer and recommend quantization rollback.",
    "intent": "SYSTEM_DIAGNOSTIC_TELEMETRY",
    "latencyMs": 31,
    "tokensPerSec": 162,
    "faithfulness": 99.2,
    "retrievedChunks": [
      {
        "source": "Prometheus // triton_inference_metrics_line04",
        "score": 0.979,
        "snippet": "Ambient lighting temperature shift (+650K) increased patch embedding KL-divergence from 0.03 to 0.19 at 14:20 UTC."
      },
      {
        "source": "MLflow // Registry Model sentinel_vit_int8_v12",
        "score": 0.946,
        "snippet": "Dynamic histogram calibration enabled in v12.2 restores mAP@50 to 99.61% under high-lux spectral variance."
      },
      {
        "source": "Qdrant // runbook_edge_tensorrt.md",
        "score": 0.912,
        "snippet": "Execute zero-downtime weight hot-swap via Triton Model Control API with calibration profile 'spectral_adaptive_int8'."
      }
    ],
    "synthesizedAnswer": "Distribution drift detected on Edge Line-04 due to ambient lighting color temperature shifts (+650K), increasing patch embedding KL-divergence to 0.19. Recommended protocol: perform zero-downtime weight hot-swap to 'sentinel_vit_int8_v12.2' using the 'spectral_adaptive_int8' calibration profile to restore mAP@50 to 99.61% within <15 seconds."
  },
  {
    "id": "causal-bi",
    "label": "Causal Attribution of Personalization Engine",
    "query": "What is the true incremental LTV uplift (CATE) of the neural recommendation engine after controlling for seasonal bias?",
    "intent": "CAUSAL_INFERENCE_SQL",
    "latencyMs": 41,
    "tokensPerSec": 139,
    "faithfulness": 99.5,
    "retrievedChunks": [
      {
        "source": "DuckDB // causal_uplift_experiment_exp409.sql",
        "score": 0.988,
        "snippet": "Doubly-Robust estimator across N=1.42M users yields +24.8% net LTV uplift (95% CI: [+22.1%, +27.4%], p < 0.0001)."
      },
      {
        "source": "Polaris BI // Cohort Retention Matrix Day-90",
        "score": 0.957,
        "snippet": "High-intent power users show +31.4% repeat session frequency; cold-start users gain +18.2% activation via hybrid embeddings."
      },
      {
        "source": "Qdrant // executive_memo_personalization_roi.pdf",
        "score": 0.921,
        "snippet": "Net annualized incremental revenue attributed strictly to neural ranking model (net of promo spend) equals $3.42M."
      }
    ],
    "synthesizedAnswer": "After controlling for seasonal bias using a Doubly-Robust Causal Estimator across 1.42M users, the neural recommendation engine drove a net causal LTV uplift of +24.8% (95% CI: [+22.1%, +27.4%]). Key incremental drivers include new user activation (+18.2%) and repeat session velocity (+31.4%), yielding a verified annualized revenue impact of $3.42M."
  }
]
```
